import { Menu } from "antd";
import React, { useEffect } from "react";
import { useImmer } from "use-immer";
import { useLocation, useNavigate } from "react-router-dom";
import { Observer } from "mobx-react";
import IMenu from "@/interfaces/IMenu";
import menuStore from "@/mobx/system/menu";

function MenuLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedKeys, setSelectedKeys] = useImmer<Array<string>>([]); // 设置选中的菜单
  const [openKeys, setOpenKeys] = useImmer<Array<string>>([]); // 设置展开的菜单

  const openPage = (data: any) => {
    navigate(data.key);
    setSelectedKeys([data.key]);
  };

  // 控制显示对应的菜单
  const findMenu = () => {
    const menuKey: any = menuStore.menu.flat(Infinity).find((item: IMenu) => {
      return location.pathname.includes(item.key);
    });

    if (!menuKey) {
      const token = localStorage.getItem("token");

      if (token) {
        navigate("/workplace")
      }else{
        navigate("/login");
      }
      //

    }
    if (menuKey) {
      setOpenKeys([menuKey.menu]);
    }
  };

  useEffect(() => {
    // 没有登录只能进入登录页面

    if (!localStorage.getItem("token")) {
      navigate("login");
      return;
    }
    if (location.pathname === "/") {
      navigate("workplace");
    }

    findMenu();
    setSelectedKeys([location.pathname]);

    return () => {
      setSelectedKeys([]);
    };
  }, [location]);

  return (
    <Observer>
      {() => {
        return (
          <>
            <Menu
              mode="inline"
              selectedKeys={selectedKeys}
              items={menuStore.menu}
              openKeys={openKeys}
              onOpenChange={(openKeys: string[]) => {
                if (openKeys) {
                  if (openKeys.length > 1) {
                    const key: any = [openKeys.at(-1)];
                    setOpenKeys(key);
                  } else {
                    setOpenKeys(openKeys);
                  }
                }
              }}
              onClick={(data: any) => {
                openPage(data);
              }}
            />
          </>
        );
      }}
    </Observer>
  );
}

export default MenuLayout;
