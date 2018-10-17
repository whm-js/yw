import axios from "axios";
import { Loading, Message } from "element-ui";
// import store from "../store/store";
import router from "../router";

var baseUrl = "//192.168.0.59:8001/"; //服务器地址
if (location.hostname == "localhost") {
  baseUrl = "//192.168.0.59:8001/";
}
//: http://101.37.24.216:3101
axios.defaults.timeout = 5000;

// request拦截器
var loadinginstace;
axios.interceptors.request.use(
  config => {
    loadinginstace = Loading.service({
      lock: true,
      text: "Loading",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.7)"
    });
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    config.transformRequest = [
      function(data) {
        let dataStr = ""; //数据拼接字符串
        Object.keys(data).forEach(key => {
          dataStr += key + "=" + data[key] + "&";
        });

        if (dataStr !== "") {
          dataStr = dataStr.substr(0, dataStr.lastIndexOf("&"));
        }
        return dataStr;
      }
    ];
    const userLoginInfo = JSON.parse(localStorage.getItem("userLoginInfo"));
    if (userLoginInfo) {
      const token = JSON.parse(localStorage.getItem("userLoginInfo")).token;
      // Bearer是JWT的认证头部信息
      config.headers["Authorization"] = "Bearer " + token;
    }

    return config;
  },
  error => {
    Message.error({
      message: "加载超时"
    });
    return Promise.reject(error);
  }
);

// response拦截器
axios.interceptors.response.use(
  data => {
    // 响应成功关闭loading
    loadinginstace.close();
    return data;
  },
  error => {
    Message.error({
      message: "服务器加载失败"
    });
    loadinginstace.close();
    return Promise.reject(error);
  }
);

export default async (url, data, method = "post") => {
  url = baseUrl + url;

  let promise = new Promise(function(resolve, reject) {
    axios({
      method: method,
      url: url,
      data: data
    })
      .then(function(res) {
        switch (res.status) {
          case 200:
            resolve(res.data);
            break;
          case 201:
            Message.error(res.data.msg);
            reject(res.data.msg);
            break;
          case 401:
            Message.error(res.data.msg);
            router.push("/");
            reject(res.data.msg);
            break;
          case 404:
            Message.error(res.data.msg);
            // router.push("/login");
            reject(res.data.msg);
            break;
          default:
            reject(res.data.msg);
        }
        // if (res.status !== 200) {
        //   Message.error(res.data.msg);
        //   reject(res.data.message);
        // }
        // if (res.data.status !== 200) {
        //   if (res.data.code === -3003) {
        //     // store._actions.setSignOut[0]();
        //     Message.error(res.data.msg);
        //     router.push("/login");
        //     reject(res.data.msg);
        //   } else {
        //     Message.error(res.data.msg);
        //     reject(res.data.msg);
        //   }
        // } else {
        //   resolve(res.data);
        // }
      })
      .catch(function(err) {
        Message.error(err);
        reject(err);
      });
  });
  return promise;
};
