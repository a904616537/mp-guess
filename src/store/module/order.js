/**
* FileType js
* @Author: Kain·Shi <a904616537@outlook.com>
* @DateTime:    2019-02-11 23:09:06
* @Description
* @Flow 
*/

import * as types  from '../mutation-types'

const state = {
	today       : [],	// 今日订单
	unfilled    : [],	// 未完成订单
	status_1    : 0,	// 状态订单
	status_3    : 0,	// 状态订单
	week_order  : [],	// 周收入订单
	weekIncome  : 0,		// 周收入
	consume     : {total : 0},	// 总收入
	date_order  : [],	// 日期分组订单
	total_order : 0		// 总接单
}

const actions = {
	setToDay({commit}, data) {
		commit(types.SET_TODAY, data);
	},
	setUnfilled({commit}, data) {
		commit(types.SET_UNFILLED, data);
	},
	setStatus1({commit}, data) {
		commit(types.SET_STATUS_1, data);
	},
	setStatus3({commit}, data) {
		commit(types.SET_STATUS_3, data);
	},
	setWeek({commit}, data) {
		commit(types.SET_WEEK, data);
	},
	setConsume({commit}, data) {
		commit(types.SET_CONSUME, data);
	},
	setDate({commit}, data) {
		commit(types.SET_DATE, data);
	},
}

// mutations
const mutations = {
	[types.SET_TODAY] (state, data) {
		state.today = data;
	},
	[types.SET_UNFILLED] (state, data) {
		state.unfilled = data;
	},
	[types.SET_STATUS_1] (state, data) {
		state.status_1 = data;
	},
	[types.SET_STATUS_3] (state, data) {
		state.status_3 = data;
	},
	[types.SET_WEEK] (state, data) {
		state.week_order = data;
		let count = 0;
		data.map(val => count += val.total);
		state.weekIncome = count;
	},
	[types.SET_CONSUME] (state, data) {
		state.consume.total = Math.floor(data.total * 100)/100;
	},
	[types.SET_DATE] (state, data) {
		state.date_order = data;
		let total_order = 0;
		data.map(val => total_order += val.number);
		state.total_order = total_order;
	},
}

export default {
	state,
	actions,
	mutations
}