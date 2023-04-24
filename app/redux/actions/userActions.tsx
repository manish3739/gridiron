import * as type from '../../utils/Constants'

export function loginUser(data: any, successCallBack: any,failureCallBack: any) {
    return {
      type: type.LOGIN_USER_REQUESTED,
      payload: {
        successCallBack,
        failureCallBack,
        data
      },
    };
  };