/**
# Sample Wechat MP
* @Author: Sumi <xumin.1991@163.com>
* @DateTime:    2018-06-14 16:15:52
* @Description
* @Flow 
*/

import * as types  from '../mutation-types'

const state = {
	questions : null,	// 题库
	count     : 0,		// 游戏次数
	question  : {}
}

const actions = {
	// 初始化题库
	onInitQuestion({commit}, data) {
		commit(types.QUESTION_INIT, data);
	},
	setQuestion({commit}, data) {
		commit(types.QUESTION_SET, data)
	},
	setCount({commit}, data) {
		commit(types.QUESTION_SETCOUNT, data);
	},
	play({commit}, data) {
		commit(types.QUESTION_PLAY, data);
	},
}

// mutations
const mutations = {
	[types.QUESTION_INIT] (state, data) {
		console.log('questions', data)
		state.questions = data;
	},
	[types.QUESTION_SET] (state, data) {
		state.question = data;
	},
	[types.QUESTION_SETCOUNT] (state, data) {
		console.log('初始化次数', data)
		state.count = data.count;
	},
	[types.QUESTION_PLAY] (state, data) {
		state.count -= 1;
		console.log('state.number', state.number)
	}
}

export default {
	state,
	actions,
	mutations
}