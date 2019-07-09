import fs from 'fs'
class background{
	constructor(vue){
		this.vue = vue;
	}




	mainProcess(){
		this.ReadConfigDir()
	}
	ReadConfigDir(){
		/*判断配置文件夹是否存在*/
		let vm = this;
		fs.exists('./config', function(isExist){
			if(isExist){/*存在，读取配置文件*/
				fs.readdir('./config', function(err,files){
					if(err){throw err}else{
						vm.ReadDataFromMainfest()
					}
				});
			}else{/*不存在，创建配置文件夹，创建配置清单*/
				fs.mkdir('./config', function(err){
					if(err){throw err}else{
						vm.ResetMainfest()
					}
				});
			}
		});
	}
	ResetMainfest(){/*写入配置文件*/
		let vm = this;
		let mainfest = JSON.stringify(vm.vue.$store.state.Mainfest.mainfest)
		fs.writeFile('./config/mainfest.json',mainfest,function(err){
			if(err){throw err}
		})
	}
	async ReadDataFromMainfest() {/*读取mainfest数据*/
		let vm = this;
		let res = '';
		await fs.exists('./config/mainfest.json',function (isExist) {
			if(isExist){
				fs.readFile('./config/mainfest.json','utf-8',function(err,data){
					if(err){throw err}else{
						res = JSON.parse(data);
						vm.vue.mainfest = res;
					}
				})
			}else{
				vm.ResetMainfest()
			}
		})
	}
}
export default background
