/**
# Sample Wechat MP
* @Author: Sumi <xumin.1991@163.com>
* @DateTime:    2018-06-14 16:15:52
* @Description
* @Flow 
*/

import * as types  from '../mutation-types'

const state = {
	width  : 0,
	height : 0,
	system : 'IOS'
}

const actions = {
	// 初始化题库
	onSetSystem({commit}, data) {
		commit(types.SYSTEM_SET, data);
	},
}

// mutations
const mutations = {
	[types.SYSTEM_SET] (state, data) {
		state.width  = data.width;
		state.height = data.height;
		state.system = data.system;
	}
}

export default {
	state,
	actions,
	mutations
}