<template>
	<b-row id="contato" class="contato">
		<b-col class="col-12">
			<div class="border-space"></div>
			<div class="border-space"></div>
			<div class="contato-text-wrap">
				<p class="text-center contato-text"><font-awesome-icon class="fa-icon" :icon="['fas', 'phone']"></font-awesome-icon> (84) 2030-6703  |  (84) 99911-9505 <a href="https://api.whatsapp.com/send?phone=5584999119505" target="_blank"><font-awesome-icon class="fa-icon whats" :icon="['fab', 'whatsapp']"></font-awesome-icon></a></p>
				<p class="text-center contato-text"><font-awesome-icon class="fa-icon" :icon="['fas', 'map-marker-alt']"></font-awesome-icon> Av. Lima e Silva, 1524 - Lagoa Nova, Natal/RN</p>
			</div>
			<div class="contato-mapa">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.2405003185872!2d-35.22216568627528!3d-5.8216700590219475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2555e0403b3fd%3A0xaf1df0db79bc64e6!2sAv.+Lima+e+Silva%2C+1524+-+Nossa+Sra.+de+Nazar%C3%A9%2C+Natal+-+RN%2C+59062-070!5e0!3m2!1spt-BR!2sbr!4v1552485682931" class="mapa" frameborder="0" style="border:0" allowfullscreen></iframe><br />
            </div>
		</b-col>
	</b-row>
</template>

<style type="text/css">
	.contato {
		padding-top: 64px;
		padding-bottom: 50px;
		color: #000;
		background: #cc2928;
	}

	.mapa{
		width: 50%;
		height: 200px;
	}

	.contato-text-wrap{
		padding-top: 30px;
	}
	
	.contato-border {
		width: 50%;
		height: 4px;
		background: white;
	}

	.fa-icon{
		color: white;
		font-size: 20px;
	}

	.whats{
		font-size: 25px;
	}

	.contato-text {
		padding-top: 5px;
		color: white;
		font-size: 20px;
	}


	.contato-mapa {
		filter: grayscale(100%);
		-webkit-filter: grayscale(100%);
		padding-top: 30px;
	}

	@media (max-width: 576px) {
		.contato {
			padding-top: 0px;
		}
		.contato-text {
			padding: 0px;
			font-size: 15px;
		}
		.mapa{
			width: 90%;
			height: 200px;
		}
	}
</style>