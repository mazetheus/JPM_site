<template>
	<b-row id="clientes" class="clientes">
		<b-col class="col-12 clientes-banner">
			<h4 class="clientes-header text-center">NOSSOS CLIENTES</h4>
		</b-col>
		<b-col class="col-12 cliente">
			<div>
				<h4 class="descricao text-left">
					
				Segmento {{ segmentos[slide] }}<br />
				</h4>

				<b-carousel
					id="carousel1"
					style="text-shadow: 1px 1px 2px #333;"
					controls
					:interval="4000"
					img-width="100%"
					img-height="auto"
					v-model="slide"
					@sliding-start="onSlideStart"
					@sliding-end="onSlideEnd"
					>

					<b-carousel-slide
						:img-src="require('../assets/Segmento_Industrial.png')"/>

					<b-carousel-slide
						:img-src="require('../assets/Segmento_Residencial.png')"/>

					<b-carousel-slide
						:img-src="require('../assets/Segmento_Hospedagem.png')"/>

					<b-carousel-slide
						:img-src="require('../assets/Segmento_Outros.png')"/>


				</b-carousel>
			</div>
		</b-col>
	</b-row>
</template>

<script>
  export default {
	data() {
		return {
			segmentos: [
				'Industrial',
				'Residencial',
				'Hospedagem',
				'Outros',
			],
			slide: 0,
			sliding: null,
		}
	},

    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style type="text/css">
	.clientes-header {
		font-weight: bold;
		padding-top: 20px;
		padding-bottom: 10px;
		font-size: 3vw;
		color: #fff;
	}

	.carousel-control-next-icon:after{
		content: '►';
		font-size: 35px;
		color: black;
	}

	.carousel-control-prev-icon:after {
		content: '◄';
		font-size: 35px;
		color: black;
		padding-left: 
	}

	.clientes-banner{
		background: #cc2928;
		width: 100%;
	}

	.clientes {
		margin-top: 0px;
	}

	.cliente{
		padding: 0px;
	}

	.descricao{
		padding-top: 10px;
		padding-left: 20px;
	}

	@media (max-width: 576px) {

		.cliente-title {
			font-size: 3vw;
		}

		.cliente-text {
			font-size: 2.8vw;
		}

		.cliente{
			padding-top: 5px;
		}

		.carousel-control-next-icon:after, .carousel-control-prev-icon:after{
			font-size: 15px;
		}

	}
</style>