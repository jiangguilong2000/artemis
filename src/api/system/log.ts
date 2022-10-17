import { LogParams, LogListGetResultModel } from './model/logModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  LogList = '/system/log/page',
  LogEmpty = '/system/log/empty',
}

export const getLogListByPage = (params: LogParams) =>
  defHttp.get<LogListGetResultModel>({ url: Api.LogList, params });

export const logEmpty = () => defHttp.post({ url: Api.LogEmpty });
