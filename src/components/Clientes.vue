<template>
	<b-row id="clientes" class="clientes">
		<b-col class="col-12 clientes-banner">
			<h4 class="clientes-header text-center">NOSSOS CLIENTES</h4>
		</b-col>
		<b-col class="col-12 cliente">
			<div>
				<h4 class="descricao text-center">
					
				SEGMENTO {{ segmentos[slide] }}<br />
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
						:img-src="require('../assets/Segmento_Educacional.png')"/>

					<b-carousel-slide
						:img-src="require('../assets/Segmento_Hospitalar.png')"/>

					<b-carousel-slide
						:img-src="require('../assets/Segmento_Comercial.png')"/>

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
				'INDUSTRIAL',
				'RESIDENCIAL',
				'HOSPEDAGEM',
				'EDUCACIONAL',
				`HOSPITALAR`,
				'COMERCIAL',
				'OUTROS',
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
		color: #000;
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
	}

	.clientes-banner{
		background: #cecece;
		width: 100%;
	}

	.clientes {
		margin-top: 0px;
	}

	.cliente{
		padding: 0px;
	}

	.descricao{
		padding-top: 20px;
		color: #000;
		font-size: 2vw;
	}

	@media (max-width: 576px) {

		.cliente-text {
			font-size: 2.8vw;
		}
		.clientes-header{
			font-size: 15px;
		}

		.descricao{
			font-size: 10px;
		}

		.cliente{
			padding-top: 5px;
		}

		.carousel-control-next-icon:after, .carousel-control-prev-icon:after{
			font-size: 15px;
		}

	}
</style>