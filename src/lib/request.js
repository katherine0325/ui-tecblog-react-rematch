import Axios from 'axios'
// import { message } from 'antd';

const request = params => {
    try {
        return Axios.request(params);
    } catch (error) {
        if (error.status === 401) {
            // message.error('请先登录');
        } else {
            // message.error('请求失败');
        }
        throw error;
    }
}

export default request;
