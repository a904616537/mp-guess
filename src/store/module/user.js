/**
# Sample Wechat MP
* @Author: Sumi <xumin.1991@163.com>
* @DateTime:    2018-06-14 16:15:52
* @Description
* @Flow 
*/

import * as types  from '../mutation-types'

const state = {
	user        : {
		avatarUrl : '/static/imgs/headimg.jpg',
	},
	session_key : '',
	detail      : {},
	share       : null,
	share_uid   : null,
	token       : null
}

const actions = {
	onLogin({commit}, data) {
		commit(types.LOGIN, data);
	},
	setSessionKey({commit}, data) {
		commit(types.SETSESSIONKEY, data);
	},
}

// mutations
const mutations = {
	[types.LOGIN] (state, data) {
		state.user = data;
	},
	[types.SETSESSIONKEY] (state, data) {
		state.session_key = data;
	},
	[types.USERDETAIL] (state, data) {
		state.token  = data.token;
		state.detail = data.user;

	},
	[types.SETSHARE] (state, data) {
		state.share = data;
	},
	[types.USER_UID] (state, data) {
		state.share_uid = data;
	},
}

export default {
	state,
	actions,
	mutations
}