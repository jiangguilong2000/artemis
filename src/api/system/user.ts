import { User, UserVO, UserDTO } from './model/userModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  Page = '/system/user/page',
  Set = '/system/user/set',
  Del = '/system/user/del',
  SetPassword = '/system/user/set-password',
}

// 菜单树
export const page = (params?: UserVO) => defHttp.get<UserDTO>({ url: Api.Page, params });

// 保存
export const set = (params: User) => defHttp.post<User>({ url: Api.Set, params });

// 删除
export const del = (params: { ids: String }) =>
  defHttp.post<boolean>({ url: Api.Del + `?ids=${params.ids}` });

// 设置密码
export const userSetPassword = (params?: User) =>
  defHttp.post<boolean>({ url: Api.SetPassword, params });
