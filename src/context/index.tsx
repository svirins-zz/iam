import React from "react";
import { useImmer } from "use-immer";

import { AuxProps, ContextProps } from "../@types";

export const myContext = React.createContext<Partial<ContextProps>>({});

const Provider = ({ children }: AuxProps) => {
  const [choice, setChoice] = useImmer({
    key: "",
  });
  const [menuVisible, setMenuVisible] = useImmer({
    isVisible: false,
  });
  const [modalVisible, setModalVisible] = useImmer({
    isVisible: false,
  });

  return (
    <myContext.Provider
      value={{
        choice,
        menuVisible,
        modalVisible,
        handleSelect: (e) => {
          console.log(e);
          // setChoice((draft) => {
          //   draft.key = key.toString();
          // });
        },
        closeMenu: () => {
          console.log("closeMenufired");
          setMenuVisible((draft) => {
            draft.isVisible = false;
          });
        },
        showMenu: () => {
          console.log("showMenufired");
          setMenuVisible((draft) => {
            draft.isVisible = true;
          });
        },
        closeModal: () => {
          setModalVisible((draft) => {
            draft.isVisible = false;
          });
        },
        showModal: () => {
          setModalVisible((draft) => {
            draft.isVisible = true;
          });
        },
      }}
    >
      {children}
    </myContext.Provider>
  );
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line react/display-name
export default ({ element }: { element: React.ReactChildren }): JSX.Element => {
  return <Provider>{element}</Provider>;
};
