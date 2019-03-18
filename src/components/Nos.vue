<template>
	<b-row id="nos" class="nos">
		<b-col class="col-12 col-md-6 p-0">
			<b-img :src="require('@/assets/nos.png')" fluid class="nos-img"></b-img>
		</b-col>
		<b-col class="align-self-center">
			<h1 class="nos-header text-left">QUEM SOMOS</h1>

			<p class="nos-text text-left">A JPM Engenharia de Incêndio é uma empresa especializada em todos os serviços necessários para a regularização do AVCB (Auto de Vistoria do Corpo de Bombeiros). Elaboramos seu projeto, executamos suas instalações e ainda realizamos suas manutenções preventivas, incluindo todos os sistemas envolvidos.</p>
		</b-col>
	</b-row>
</template>

<script type="text/javascript">
	export default {

	}
</script>

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

	@media (max-width: 768px) {
		.nos-header, .nos-text {
			padding: 16px 120px;
			width: 100%;
		}
	}

	@media (max-width: 576px) {
		.nos-header, .nos-text {
			padding: 16px 0px;
			width: 100%;
		}

		.nos-header {
			font-size: 8vw;
		}
	}
</style>