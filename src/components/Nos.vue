<template>
	<div id="nos" class="nos">
		
		<b-row class="mobile">
			<h1 class="nos-header-mobile"><strong>QUEM SOMOS</strong></h1>
			<p class="nos-text text-left">A JPM Engenharia de Incêndio é uma empresa especializada em todos os serviços necessários para a regularização do AVCB (Auto de Vistoria do Corpo de Bombeiros). Elaboramos seu projeto, executamos suas instalações e ainda realizamos suas manutenções preventivas, incluindo todos os sistemas envolvidos.</p>
			<b-img :src="require('@/assets/nos.jpg')" fluid class="nos-img"></b-img>
		</b-row>

		<b-row class="desktop">
			<b-col class="col-12 col-md-6 p-0">
				<b-img :src="require('@/assets/nos.jpg')" fluid class="nos-img"></b-img>
			</b-col>
			<b-col class="align-self-center">
				<h1 class="nos-header text-left">QUEM SOMOS</h1>

				<p class="nos-text text-left">A JPM Engenharia de Incêndio é uma empresa especializada em todos os serviços necessários para a regularização do AVCB (Auto de Vistoria do Corpo de Bombeiros). Elaboramos seu projeto, executamos suas instalações e ainda realizamos suas manutenções preventivas, incluindo todos os sistemas envolvidos.</p>
			</b-col>


		</b-row>
	</div>
</template>


<style type="text/css" scoped>
	.nos {
		padding: 0px;
		color: #000;
	}

	.nos-header {
		font-weight: bold;
		padding-left: 40px;
		padding-bottom: 16px;
		font-size: 2vw;
		color: #cc2928;
	}

	.nos-border {
		background: #ffcd00;
		width: 100%;
		height: 4px;
	}

	.nos-text {
		width: 80%;
		font-size: 14px;
		padding-top: 10px;
		padding-left: 40px;
	}
	.mobile{
		display: none;
	}

	@media (max-width: 768px) {
		.mobile{
			display: block;
			padding-bottom: 20px;
			padding-left: 0px;
		}
		.nos-header-mobile {
			padding: 15px 0px;
			font-size: 15px;
			text-align: center;
			background: #cecece;
			width: 100% !important;

		}
		.nos-text{
			font-size: 10px;
			width: 100%;
			padding: 0px 20px;
		}
		.desktop{
			display: none;
		}
		.nos-img{
			width: 50%;
			box-shadow: 2px 2px 3px #999;
		}
		.nos-img:hover, .nos-img:active{
			box-shadow: 2px 2px 3px #666;
			width: 80%;
		}

	}
</style>