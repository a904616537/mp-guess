/**
# Sample Wechat MP
* @Author: Sumi <xumin.1991@163.com>
* @DateTime:    2018-06-14 16:15:52
* @Description
* @Flow 
*/

// export const getBanner = (state, getters) => {
// 	return state.Banner.banner.filter(val => val.type === '2')
// }

export const isLogin = (state, getters) => {
	return state.User.token? true : false;
}