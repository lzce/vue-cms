<template>
  <div class="shopcar-container">

    <div class="mui-card" v-for="(item, i) in goodsList" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">

						<mt-switch v-model="$store.getters.getSelected[item.id]"
							@change="changeSelected(item.id, $store.getters.getSelected[item.id])"
						></mt-switch>

						<img :src="item.thumb_path">

						<div class="info">
							<h3>{{ item.title }}</h3>
							<div class="info-bot">
								<span class="price">¥ {{ item.sell_price }}</span>

								<numbox :initCount="$store.getters.getGoodsCount[item.id]" :goodsId="item.id"></numbox>

								<a href="javascript:;" @click.prevent="remove(item.id, i)">删除</a>
							</div>
						</div>
					</div>
				</div>
			</div>

      <!-- 这是结算区域  -->
      <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div class="jiesuan">
						<div class="left">
							<p>总计 (不含运费)</p>
							<p>
								已勾选商品 <span class="red">{{ $store.getters.getGoodsPrice.count }}</span> 件, 总价 <span class="red">¥ {{ $store.getters.getGoodsPrice.amount }}</span>
							</p>
						</div>
						<mt-button type="danger">去结算</mt-button>
						</div>
					</div>
				</div>
			</div>

			<p>{{ $store.getters.getSelected }}</p>
  </div>
</template>

<script>
import numbox from '../subcomponents/shopcar_numbox.vue'	
export default {
  // 注册组件
	components: {
		numbox
	},
	data(){
		return {
			goodsList: [] 
		}
	},
	created(){
		this.getGoodsList()
	},
	methods: {
		//根据store发送ajax拿数据
		getGoodsList(){
			//定义数组, 存储store中的id
			let arr = []
			this.$store.state.car.forEach(item => arr.push(item.id))

			// 判断arr书否为空
			if (!arr.length) {
				return
			}

			//根据store中的id, 发送ajax
			this.$http.get('api/goods/getshopcarlist/' + arr.join(',')).then(res => {
				if (res.body.status === 0) {
					this.goodsList = res.body.message
				}
			})
		},

		// 删除购物车的商品
		remove(id, index){
			//删除data中的数组对应的那一项
			this.goodsList.splice(index, 1)

			//同时store也需要删除
			this.$store.commit('removeCar', id)
		},

		//点击开关
		changeSelected(id, value) {
			// console.log(id, value)
			this.$store.commit('updateSelected', {id, selected: value})
		}
	}
}
</script>

<style lang="scss" scoped>
.shopcar-container {
	.mui-card-content-inner {
		display: flex;
		align-items: center;
		img {
			width: 60px;
			height: 60px;
		}
		.info {
			h3 {
				font-size: 13px;
				line-height: 20px;
			}
			.price{
				color: red;
				margin-right: 10px;
			}
			.info-bot {
				transform: translateY(7px);
				display: flex;
				align-items: center;
				a {
					margin-left: 10px;
				}
			}
		}
	}
	.jiesuan {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.red {
			color: red;
			font-weight: 700;
			font-size: 14px;
		}
	}
}
</style>
