<template>
	<b-row id="servicos" class="servicos">
		<b-col class="col-12 servicos-banner">
			<h4 class="servicos-header text-center">NOSSOS SERVIÇOS</h4>
		</b-col>
		<div class="espaco"></div>
		<b-col class="col-xs-12 col-sm-6 servico">
			<h4 class="text-left servico-title">Projeto de combate a Incêndio;</h4>
			<div class="servico-border" :style="{background: '#cc2928', width: '2%', height: '2px'}"></div>
			<h4 class="text-left servico-title">Acompanhamento de Vistoria;</h4>
			<div class="servico-border" :style="{background: '#cc2928', width: '2%', height: '2px'}"></div>
			<h4 class="text-left servico-title">Execução e Manutenção de Sistemas (Hidrantes, Sprinklers, SPDA, Gás GLP e GN, Detecção e Alarme de Incêndio);</h4>
			<div class="servico-border" :style="{background: '#cc2928', width: '2%', height: '2px'}"></div>
			<h4 class="text-left servico-title">Consultoria para locação de Sinalização, Luminárias de Emergência, Extintores de Incêndio;</h4>
			<div class="servico-border" :style="{background: '#cc2928', width: '2%', height: '2px'}"></div>
			<h4 class="text-left servico-title">Plano de Manutenção de Sprinklers e Hidrantes;</h4>
			<div class="servico-border" :style="{background: '#cc2928', width: '2%', height: '2px'}"></div>
		</b-col>
		<b-col class="col-xs-12 col-sm-6 servico">
			<h4 class="text-left servico-title">Testes e Laudos de Estanqueidade;</h4>
			<div class="servico-border" :style="{background: '#cc2928', width: '2%', height: '2px'}"></div>
			<h4 class="text-left servico-title">Laudo de aceitação de SPDA (para-raios);</h4>
			<div class="servico-border" :style="{background: '#cc2928', width: '2%', height: '2px'}"></div>
			<h4 class="text-left servico-title">Teste de carga de alças de salvamento;</h4>
			<div class="servico-border" :style="{background: '#cc2928', width: '2%', height: '2px'}"></div>
			<h4 class="text-left servico-title">Treinamento e formação de brigadistas;</h4>
			<div class="servico-border" :style="{background: '#cc2928', width: '2%', height: '2px'}"></div>
			<h4 class="text-left servico-title">Consultoria (pré-vistoria);</h4>
			<div class="servico-border" :style="{background: '#cc2928', width: '2%', height: '2px'}"></div>
			<h4 class="text-left servico-title">Levantamentos e Elaboração de Laudos Técnicos.</h4>
			<div class="servico-border" :style="{background: '#cc2928', width: '2%', height: '2px'}"></div>
		</b-col>
	</b-row>
</template>

<style type="text/css">
	.servicos-header {
		font-weight: bold;
		padding-top: 20px;
		padding-bottom: 10px;
		font-size: 3vw;
		color: #fff;
	}

	.espaco{
		padding: 20px;
		width: 100%;
	}

	.servicos-banner{
		background: #cC2928;
		width: 100%;
	}

	.servicos {
		margin-top: 0px;
		padding-bottom: 30px;
	}

	.servico {
		padding: 0px 100px;
	}

	.servico-title {
		font-weight: 700;
		font-size: 1vw;
		color: #000;
		padding-top: 8px;
	}

	@media (max-width: 720px) {
		.oqfazemos {
			padding: 0px;
			margin-top: 0px;
		}

		.servicos-header {
			font-size: 15px;
		}

		.servico-title {
			font-size: 3vw;
		}

		.servico{
			padding-top: 5px;
			padding-left: 50px;
			padding-right: 50px;
		}

		.servico-border{
			width: 100%;
		}
		.espaco{
			padding: 5px;
		}
	}
</style>