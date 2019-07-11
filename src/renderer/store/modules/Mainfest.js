const state = {
	mainfest: {
		background : 'rgba(10,10,10,0.7)',
		menuHeight : 50,
	},
	bg:null
}

const mutations = {
	SetMainfest:function(state,param){
	    state.mainfest = param;
	},
	Setbg:function(state,param){
		state.mainfest = param;
	},
}

const actions = {
	SetMainfest ({ commit },param) {
		commit('SetMainfest',param)
  	},
	Setbg:function(state,param){
		state.mainfest = param;
	},
}

export default {
  state,
  mutations,
  actions
}
