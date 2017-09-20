/*
	RANGO DE RENTAS

		1 = "$400.000 a $699.999"
		2 = "$700.000 a $999.999"
		3 = "$1.000.000 a $1.299.999"
		4 = "$1.300.000 a $1.599.999"
		5 = "$1.600.000 a $1.899.999"
		6 = "$1.900.000 a $2.199.999"
		7 = "$2.200.000 a $2.499.999"
		8 = "$2.500.000 a $2.799.999"
		9 = "$2.800.000 a $3.099.999"
		10 = "$3.100.000 a $3.399.999"
		11 = "$3.400.000 a $3.699.999";
		12 = "$3.700.000 a $3.999.999";
		13 = "$4.000.000 a $4.300.000";
s
*/

/*
	CLASIFICACIÓN DE TARJETAS

	-viajes
	-entretencion
	-descuentos

*/

var url_pdf_tabServicios = "http://google.cl";

var tarjetas = [
	{name:"todas",value:"Todas"},
	{name:"lanpass",value:"LATAM Pass"},
	{name:"superpuntos",value:"SUPERPUNTOS"},
	{name:"clublectores",value:"Club de lectores"},
	{name:"321",value:"3.2.1."},
	{name:"cocha",value:"Cocha"},
	{name:"universal",value:"Tarjeta  Universal"},
	{name:"redcompra",value:"Redcompra"}
];

var tituloBanco = [
	{name:"home", value:"Tarjetas de Crédito - Banco Santander Chile"},
	{name:"nuestras", value:"Nuestras Tarjetas - Banco Santander Chile"},
	{name:"encuentra", value:"Encuentra tu Tarjeta - Banco Santander Chile"},
	{name:"wmlimited", value:"WorldMember Limited Santander LATAM Pass - Banco Santander Chile"},
	{name:"wmblack", value:"WorldMember Santander LATAM Pass - Banco Santander Chile"},
	{name:"plata", value:"Platinum Santander LATAM Pass - Banco Santander Chile"},
	{name:"goldlatam", value:"Gold Santander LATAM Pass - Banco Santander Chile"},
	{name:"spuntos", value:"SUPERPUNTOS - Banco Santander Chile"},
	{name:"rcompra", value:"Redcompra - Banco Santander Chile"},
	{name:"select", value:"Débito Select - Banco Santander Chile"},
	{name:"selectgris", value:"Débito Select - Banco Santander Chile"},
	{name:"ferrari", value:"WorldMember Santander FERRARI - Banco Santander Chile"},
	{name:"clectores", value:"Club de Lectores American Express - Banco Santander Chile"},
	{name:"ever", value:"Forever Santander LATAM Pass - Banco Santander Chile"},
	{name:"titanio", value:"Titanio Santander LATAM Pass - Banco Santander Chile"},
	{name:"platinumcocha", value:"Platinum Santander Cocha - Banco Santander Chile"},
	{name:"goldcocha", value:"Gold Santander Cocha - Banco Santander Chile"},
	{name:"mcuniversal", value:"MasterCard Universal - Banco Santander Chile"},
	{name:"cmujer", value:"Comunidad Mujer - Banco Santander Chile"},
	{name:"promo", value:"Promociones - Banco Santander Chile"},
	{name:"pfrecuentes", value:"Preguntas Frecuentes - Banco Santander Chile"}
];

var tarjetas_content = [
	// WORLD MEMBER LIMITED
	{
		url:"worldmemberlimited",
		name:"WorldMember Limited Santander LATAM Pass",
		range: 7,
		min_renta:"2.500.000",
		max_renta:"9.999.999",
		featured: true,
		tipoTarjeta:"lanpass",
		clasificacion:"viajes",
		idForm: "11",
		onbording: false,
		title:"VUELA MÁS, ANTES Y MEJOR",
		bajada:"Tu Tarjeta de Crédito WorldMember Limited Santander LATAM Pass, te entrega los mejores beneficios y servicios para hacer de tu viaje en LATAM una experiencia única.",
		imagen: "img/img-tarjetas/tarjeta-worldmemberlimited.png",
		link:"tarjetas/worldmemberlimited/index.asp",
		ver_mas:[
			{item:"Acumula un 33% más de kms. en tramo entre $1.5 y $4 millones del total de las compras del mes."},
			{item:"6 cupones de Upgrade y Upgrade con canje de kilómetros."}
		],
		legales:[
			{item:"<strong>Beneficio vuela más:</strong>"},
			{item:"La acumulación de KMS. LATAM Pass en cada período mensual de facturación opera hasta el monto del respectivo cupo nacional e internacional autorizado por el Banco para cada tarjeta. Esto aplica para todas las compras y pagos realizados en pesos y/o moneda extranjera en cada periodo. Los abonos que se efectúen durante el período mensual de facturación, aunque confieran nuevas disponibilidades sobre los cupos autorizados, no habilitan la acumulación de mayor número de KMS. LATAM Pass."},
			{item:"Vigencia de los kilómetros: Los kms. acumulados tienen vigencia hasta el 31 de diciembre del año subsiguiente al que fueron acreditados. Si entre diciembre del año anterior y noviembre del año en curso acumula una cantidad igual o superior a 12.000 KMS. LATAM Pass con el uso de tu Tarjeta de Crédito WorldMember Limited Santander LATAM Pass, renovarás el saldo completo de KMS. LATAM Pass por 36 meses."},
			{item:"(1) y (3) Rubros en lo que no se acumula kms: Se excluyen las siguientes operaciones con Tarjeta de Crédito y/o Redcompra Santander LATAM Pass: compras de cargo inmediato (avances en efectivo, compras en casinos y juegos de azar), compra de combustibles, pago de impuestos en general, notas de débito y/o crédito, así como cargo por intereses o cargos por parte del Banco (comisiones). Acumulación de kilómetros LATAM Pass en cada período mensual de facturación relacionados a compras y pagos efectuados en pesos o moneda extranjera con la Tarjeta de Crédito Santander LATAM Pass, opera hasta el monto del respectivo cupo nacional o internacional autorizado por el Banco para la tarjeta a la fecha del estado de cuenta."},
			{item:"(2) 33% más de acumulación de kms.: Los beneficios de aceleración del 33% se otorgarán para las ventas realizadas durante el año 2017 o hasta agotar stock de 50.000 nuevos clientes que contraten la Tarjeta de Crédito WorldMember Limited. Vigencia de beneficio de aceleración de acumulación de KMS. LATAM Pass hasta el 31 de diciembre del 2018. Este beneficios se otorga al titular de la Tarjeta de Crédito WorldMember Limited en todas sus Tarjetas de Crédito Santander LATAM PASS asociadas."},
			{item:"(4) Conozca los términos y condiciones de Multiplica, comercios adheridos, beneficio y vigencia de la adhesión de cada comercio en www.lan.com/multiplica. El Programa LATAM Pass, Multiplica y el abono y canje de Kilómetros LATAM Pass son responsabilidad de LATAM AIRLINES GROUP S.A., sin que corresponda a Banco Santander Chile intervención en ello. Revise términos y condiciones aquí."},
			{item:"<br/>"},
			{item:"<strong> Beneficio vuela antes:</strong>"},
			{item:"(4) Responsabilidad de bonificación de 25%: Bonificación extra de KMS. LATAM Pass aplicable solo en tarifas, rutas y fechas que permitan la acumulación de KMS. LATAM Pass. Todos estos beneficios se rigen bajo el reglamento LATAM Pass, según se indica en https://www.latam.com/es_cl/latam-pass/."},
			{item:"(5) Solicitud de Anticipo de kms.: El anticipo se debe solicitar en www.santander.cl. Este beneficio no aplica a clientes que hayan contratado la Tarjeta de Crédito WorldMember Limited que tengan cupo inferior a $4.000.000."},
			{item:"(6) Transferencia de KMS. LATAM Pass: Revisar términos y condiciones en https://www.latam.com/es_cl/latam-pass/."},
			{item:"<br/>"},
			{item:"<strong> Beneficio vuela mejor:</strong>"},
			{item:"(7) Obtención Categoría Gold: Los beneficios Gold provenientes de la tarjeta no son acumulables con otras categorías Elite de LATAM Pass. En caso que un año determinado pierda la categoría, los beneficios asociados a ella no seguirán vigentes, así como tampoco los 6 cupones de UPG entregados por la tarjeta. Podrá recupera dicha categoría el año siguiente si durante ese año cumple la regla. Esta regla no aplica a los clientes que hayan contratado la Tarjeta WorldMember en el Plan In Black ,que tengan un cupo inferior a $4.000.000."},
			{item:"(8) Mejora categoría Elite: Aporte de los kms. elite para mejorar categoría ELITE de pasajero frecuente en LATAM Pass , está sujeto al cumplimiento de otras condiciones que exige LATAM Pass. Revisar condiciones <a target='_blank' href='https://www.latam.com/es_cl/latam-pass/sobre-el-programa/como-ser-un-socio-elite/'>aquí</a>."},
			{item:"(9) Cupones Upgrade: Los clientes titulares de la Tarjeta de Crédito WorldMember Limited Santander LATAM Pass recibirán en total un máximo de 6 cupones de Upgrade anuales. Los cupones de Upgrade, estarán vigentes hasta el 31 de marzo del año siguiente a aquel en que fueron entregados y se renovarán automáticamente siempre y cuando la tarjeta se encuentre vigente y utilizable. Los cupones no son acumulables año a año. Se excluyen pasajes comprados en familia tarifaria Base."},
			{item:"(10) Upgrade con kms.: Upgrade de cabina con KMS. LATAM Pass, no aplica a pasajes canjeados. Es confirmado con anterioridad y se disponibiliza desde 6 meses antes de la salida del vuelo. Sujeto a disponibilidad."},
			{item:"(11) Responsabilidad Salones Vip LATAM: Acceso a Salón VIP Grupo LATAM Airlines Santiago es responsabilidad de LATAM AIRLINES GROUP S.A. El acceso está limitado a la capacidad del salón."},
			{item:"(12) Uso de Salones en el aeropuerto y precio Priority Pass –Lounge KEY: El acceso a los salones internacionales será con cargo al cliente, con un costo de $27 dólares americanos por persona. Antes de viajar puede ingresar a www.prioritypass.com o https://www.loungekey.com/es y ver directorio de salas de aeropuertos disponibles."},
			{item:"(13) Condiciones Salones Pacific: El acceso a salones vip Pacific Club es gratuito solamente para el titular de la tarjeta y es de exclusiva responsabilidad de Servicios Aeroportuarios S.A. Estos beneficios se otorgan solamente al titular de la Tarjeta de Crédito WorldMember Limited Santander LATAM Pass y no son acumulables a aquellos entregados a los clientes con anterioridad, pudiendo obtener en su totalidad y como máximo solamente los beneficios antes descritos. Programa LATAM Pass y todos los beneficios LATAM Pass asociados a la tarjeta son de exclusiva responsabilidad de LATAM AIRLINES GROUP S.A., no cabiéndole a Banco Santander Chile responsabilidad alguna en ello ni en la ulterior atención que ello demande. Para obtener el detalle y condiciones de cada beneficio puede llamar al (600) 320 3030 o consultar en www.santander.cl o www.latam.com"},
			{item:"<br/>"},
			{item:"<strong>Seguros y Servicios:</strong>"},
			{item:"*Suscrito por AIG LATIN AMERICA, I.I.; póliza 009-000787. Aplican restricciones y condiciones de póliza.** Servicio proporcionado por AXA Assistance USA. Aplican restricciones."},
			{item:"<br/>"},
			{item:"<strong>Tarifas:</strong>"},
			{item:"(1) Los porcentajes deben aplicar por el monto del avance o compra según corresponda.<br/>(2) Comisión aplica a cada transacción de avance en efectivo en chile. Tarifa válida a partir de 01 de diciembre de 2013 hasta 31 de diciembre de 2017. A partir de esta última fecha, aplica la tarifa precisada en el contrato del cliente. <br/>El Banco se reserva el derecho a modificarlas, conforme a las normas impartidas por la Superintendencia de Bancos. El cliente, en caso de no estar conforme con las comisiones informadas podrá poner término a su contrato. Este tarifado no aplica a Tarjetas Santander Banefe."},
			{item:"<br/>"},
			{item:"<strong>Preguntas Frecuentes:</strong>"},
			{item:"Acumulación de KMS: (1) Se excluyen las siguientes operaciones con Tarjeta de Crédito LATAM Pass: compras de cargo inmediato (avances en efectivo, compras en casinos y juegos de azar), compra de combustibles, pago de impuestos en general (contribuciones, IVA, etc), notas de débito y/o crédito, así como cargos por intereses o cargos por parte del Banco (comisiones). Acumulación de kilómetros LATAM Pass en cada período mensual de facturación relacionados a compras y pagos efectuados en pesos o moneda extranjera con la Tarjeta de Crédito Santander LATAM Pass, opera hasta el monto del respectivo cupo nacional o internacional autorizado por el Banco para la tarjeta a la fecha del estado de cuenta.<br/>(2) Beneficio exclusivo para clientes de Tarjetas de Crédito LATAM Pass que posean la Tarjeta Redcompra Santander. Se bonifican las compras realizadas en establecimientos comerciales adheridos a Transbank S.A. Se excluyen compras de combustible, casinos, juegos de azar y pagos de impuesto en general, los que no generan kilómetros LATAM Pass. Se excluyen también los giros en cajeros automáticos Redbanc. Los kilómetros acumulados se verán reflejados en la cuenta del titular LATAM Pass al mes siguiente o subsiguiente de realizadas las compras. Los beneficios del programa LATAM Pass son de exclusiva responsabilidad de LATAM AIRLINES GROUP S.A., no cabiéndole a Banco Santander Chile responsabilidad alguna en ello ni en la ulterior atención que ello demande.<br/>(3) En tarifas, rutas y fechas limitadas que permitan la acumulación de kilómetros LATAM Pass."},

		],
		tabs: [
			{
				name:"Beneficios Tarjetas",
				num_cols: "1",
				col1: [
					{tipo:"titulo",content:"Vuela más"},
					{tipo:"sub-titulo",content:"Beneficio de Acumulación de kilómetros"},
					{tipo:"lista",content:[
						{item:"<strong>1,5 KMS. LATAM Pass por dólar gastado</strong> en todas las compras en Chile y el extranjero realizadas con la Tarjeta de Crédito. <sup>(1)</sup>"},
						{item:"<strong>33% más de KMS. LATAM Pass</strong> en tramo entre $1.5 y $4 millones  del total de las compras del mes con todas tus Tarjetas de Crédito Santander LATAM Pass <sup>(2)</sup>.<br/><strong>Ejemplo:</strong><br/><strong>Desde <span class='info'>$ 0 - $1.499.999</span> acumulan <span class='success'>1,5 KMS por 1 dólar</span></strong><br/><strong>Desde <span class='info'>$ 1.500.000 - $4.000.000</span> acumulan <span class='success'>2 KMS. por 1 dólar</span></strong><br/><strong>Desde <span class='info'>$ 4.000.001 - en adelante</span> acumulan <span class='success'>1,5 KMS por 1 dólar</span></strong>"},
						{item:"<strong>0,5 KMS. LATAM Pass por dólar gastado</strong> en compras realizadas con la Tarjeta de Débito (Redcompra) en Chile y en el extranjero. <sup>(3)</sup>"},
						{item:"<strong>Multiplica tus KMS LATAM PASS</strong> Todas tus compras con Tarjetas de Crédito Santander LATAM Pass, en tiendas adheridas, multiplicarán los kms. que acumulas <sup>(4)</sup>. Revisa las tiendas adheridas <a target='_blank' href='https://ssl.lan.com/multiplica/'>aquí</a>"}
					]},
					{tipo:"titulo",content:"Vuela antes"},
					{tipo:"lista",content:[
						{item:"<strong>Acumulación de 25% de KMS. LATAM Pass adicionales al viajar. <sup>(4)</sup> </strong><br/>Bono adicional sobre la distancia acumulada en vuelos al viajar en LATAM y American Airlines. Beneficio asociado a categoría Gold."},
						{item:"<strong>Anticipo de 100.000 KMS. LATAM Pass</strong> para usarlos cuando quieras<sup>(5)</sup>. Solicita tu anticipo <a href='../../../../tarjetas/campanas/anticipolanpass/index.asp'>aquí</a>"},
						{item:"<strong>Transferencia de KMS. LATAM Pass sin costo.<sup>(6)</sup></strong><br/>Cada año, la primera transferencia de kms. que realice el titular de la Tarjeta de Crédito WorldMember Limited Santander LATAM Pass no tendrá costos asociados. Para acceder a este beneficio, dicha transferencia deberá contemplar como mínimo 15.000 KMS. LATAM Pass y como máximo 200.000 KMS. LATAM Pass."}
					]},
					{tipo:"titulo",content:"Vuela mejor"},
					{tipo:"lista",content:[
						{item:"<strong>Obtención de la categoría Gold LATAM Pass <sup>(7)</sup>.</strong>"},
						{item:"<strong>Acumulación de kms. por compras con tus tarjetas permiten acceder a categoría Elite superior. <sup>(8)</sup> </strong><br/> El 10% de acumulación de kms. por compras con Tajeta WorldMember Limited Santander LATAM Pass (con tope de 20.000 kms), permite mantener o mejorar categoría ELITE de pasajeros frecuente de LATAM desde el 31 de marzo del año siguiente. (Acumulación de kms. para este beneficio corresponden exclusivamente a Tarjera WorldMember Limited Santander LATAM Pass y no todas las Tarjetas de Crédito Santander LATAM Pass)."}
					]},
					{tipo:"sub-titulo",content:"Beneficios y servicios asociados al viaje"},
					{tipo:"lista",content:[
						{item:"<strong>Sin comisión en compras internacionales.</strong><br/>"},
						{item:"<strong>6 Cupones de Upgrade LATAM Pass anuales.</strong> <sup>(9)</sup> Un Upgrade permite acceder a la clase de servicio inmediatamente superior en vuelos vendidos y operados por LATAM. Es decir, si compras un pasaje en Clase Economy, te permite acceder a Clase Business. Los cupones Upgrade de tu tarjeta WorldMember Limited Santander LATAM Pass no son acumulables con otras categorías Elite de LATAM Pass. <br/><br/> Revisa más detalles de este beneficio <a target='_blank' href='https://www.latam.com/es_cl/latam-pass/upgrade-de-cabina/upgrade-de-cortesia/'>aquí.</a>"},
						{item:"<strong>Upgrade con canje de Kilómetros <sup>(10)</sup></strong><br/>Puedes solicitar un Upgrade de cabina con KMS. LATAM Pass, tanto para ti como para tus acompañantes que viajen en el mismo vuelo y fecha, en todos los vuelos internacionales comercializados y operados por LATAM Airlines, excepto si viajas con LATAM Airlines Brasil o LATAM Airlines Paraguay. Revisa condiciones <a target='_blank' href='https://www.latam.com/es_cl/latam-pass/upgrade-de-cabina/upgrade-con-kms/'>aquí</a>"},
						{item:"<strong>Check-ln preferente en Aeropuerto de Santiago Arturo Merino Benitez al viajar en LATAM, en rutas internacionales.</strong><br/>Podrás chequearte en los counters preferentes en el Aeropuerto de Santiago Arturo Merino Benitez, junto a un acompañante de vuelo. Solo debes mostrar tu Tarjeta de Crédito WorldMember Limited LATAM Pass. Este beneficio se encuentra disponible solo para las rutas internacionales y es válido para vuelos en LATAM. Beneficio asociado a categoría Elite Gold LATAM Pass."},
						{item:"<strong>Equipaje  adicional de hasta 23 kilos (sin costo) al volar en LATAM </strong><br/>En vuelos nacionales e internacionales, vendidos y operados por LATAM desde origen a destino final, el tarjetahabiente de WorldMember Limited Santander LATAM Pass cuenta siempre con el beneficio exclusivo de una pieza de equipaje adicional de hasta 23 kg sin costo. Beneficio no acumulable con otros entregados en rutas específicas.Para acceder a este beneficio, debes presentar tu Tarjeta de Crédito WorldMember Limited Santander LATAM Pass al agente de counter en el aeropuerto."},
						{item:"<strong>Prioridad de Equipaje </strong><br/>En vuelos internacionales vendidos y operados por LATAM el equipaje será etiquetado en el aeropuerto con el fin de darle prioridad en el desembarque del vuelo. Beneficio asociado a categoría Gold."},
						{item:"<strong>Acceso a Salón VIP Grupo LATAM Airlines Santiago con acompañante <sup>(11)</sup></strong><br/>Al volar en LATAM podrás acceder gratis junto a un acompañante al Salón VIP Grupo LATAM Airlines Santiago. Si deseas ingresar con más de un acompañante (incluyendo niños), tendrá un costo adicional. Durante períodos de alta demanda, es posible que el acceso a ciertos salones VIP se restrinja debido a limitaciones de capacidad."},
						{item:"<strong>Acceso a los Salones de Aeropuerto <sup>(12)</sup></strong><br/>Revisa <a target='_blank' href='/tarjetas/nuestras-tarjetas/pdf/salones-vip.pdf'>aquí</a> detalle y condiciones de acceso."},
						{item:"<strong>Acceso a salones Pacific Club en Chile <sup>(13)</sup></strong><br/>Revisa <a target='_blank' href='/tarjetas/nuestras-tarjetas/pdf/salones-vip.pdf'>aquí</a> detalle y condiciones de acceso."}
					]},

					{tipo:"parrafo",content:"<h4 class='text-center'>Descuentos exclusivos del programa Worldmember Limited <a class='btn-white' href='https://mov.santander.cl/beneficios?segmento=s-personas&categoria=beneficios-limited'>Ver todos</a></h4>"},
					{tipo:"importante", content:[
						{item: "Todos los beneficios y categoría Gold LATAM Pass asociados a tu tarjeta quedarán activos hasta 15 días hábiles después de activada la tarjeta. Para mantener la categoría deberás realizar compras durante un año calendario por al menos $4.000.000. En caso que un año determinado pierdas la categoría, podrás recuperarla para el año siguiente si durante ese año se cumple la regla. Restitución de categoría, en caso que aplique, se realiza durante el mes de abril del año siguiente.<br/>"},
						{item: "Estos beneficios se otorgan solamente al titular de la tarjeta y no son acumulables por tarjeta de crédito contratada. (Ej: si tienes una tarjeta de crédito Worldmember Limited Santander LATAM Pass y una tarjeta de crédito Worldmember Santander LATAM Pass , solo prevalecerá el uso de los beneficios de una tarjeta de crédito) Los beneficios de categoría Gold LATAM Pass no son acumulables con otras categorías Elite de LATAM Pass. Los beneficios no financieros del Programa Santander LATAM Pass rigen hasta el 31 de diciembre de 2017."}
					]},

					{tipo:"importantePrograma", content:[
						{item: "Beneficios del Programa Santander LATAM Pass se otorgan al titular de la tarjeta y no son acumulables por Tarjeta de Crédito contratada o con categorías Elite superiores del programa LATAM Pass."},
						{item:"Plazo de Activación de beneficios asociados a tu Tarjeta de Crédito (incluyendo categoría Gold LATAM Pass), quedarán activos en un plazo de 15 días hábiles contados desde la activación de dicha tarjeta."},
						{item:"Revisa detalles y condiciones de los beneficios en apartado de condiciones y restricciones."}
					]}
				]
			},
			{
				name:"Seguros y Servicios",
				num_cols: "servicios",
				pdf:"../../pdf/guia_beneficios_limited.pdf",
				col1:[
					{
						tabs:[
							{name:"MasterCard", content:[
								{name:"Servicios", content:[
									{item:"Servicio de asistente personal: Concierge"},
									{item:"Servicio de Asistencia al viajero"},
									{item:"MasterCard Global Service"},
									{item:"Wi-Fi Boingo"},
									{item:"Travel Service Mastercard"}
								]},
								{name:"Experiencias", content:[
									{item:"Priceless Cities"},
									{item:"MasterCard Traveler Rewards"}
								]},
								{name:"Seguros", content:[
									{item:"MasterCard Assist Plus (US$150.000)"},
									{item:"Seguro de Schengen"},
									{item:"MasterCard Seguro de Auto (Cobertura de US $75.000 (Alrededor del mundo) hasta 60 días consecutivos.)"},
									{item:"Garantía Extendida (Hasta US $2.500 por Ocurrencia / US $5.000 por 12 meses)"},
									{item:"Seguro de Pérdida o Retraso de Equipaje (Pérdida de equipaje hasta por US $3.000 Retraso de equipaje hasta por US $600 (más de 4 horas).)"},
									{item:"Protección de Compras (Hasta US $5.000 por Ocurrencia / US $20.000 por 12 meses, hasta 90 días después de realizada la compra cubierta)"},
									{item:"Protección Contra Asalto o Robo ATM (Cobertura por efectivo robado hasta por US $1.000 / US $3.000 por 12 meses Cobertura por muerte accidental US $10.000)"},
									{item:"Seguro Inconvenientes de Viaje (Cancelación de viajes hasta US $3.000). Demoras de viajes hasta US $200 (más de 4 horas)."}
								]}
							]},
							{name:"Visa", content:[
								{name:"Servicios", content:[
									{item:"Servicio de asistente personal: Concierge"},
									{item:"Servicio de Información al Viajero"},
									{item:"Reposición de Tarjeta y Desembolso de Efectivo de Emergencia"},
									{item:"4 Transportes Anuales Gratuitos al Aeropuerto"},
									{item:"Priority pass"}
								]},
								{name:"Experiencias", content:[
									{item:"Visa Luxury Hotel Collection"},
									{item:"Ofertas Exclusivas Visa Signature"}
								]},
								{name:"Seguros", content:[
									{item:"Servicio de Emergencia Médica Internacional (US$200.000)"},
									{item:"Seguro de Schengen"},
									{item:"Seguro de Alquiler de Autos"},
									{item:"Garantía Extendida (US$10.000)"},
									{item:"Protección de Pérdida (US$1.000)"},
									{item:"Retraso de Equipaje* (US$500)"},
									{item:"Protección de Compras (US$10.000)"},
									{item:"Seguro de Accidentes en Viajes (US$1.000.000)"},
									{item:"Protección de Precios (US$2.000)"}
								]}
							]}
						]
					}
				]
			},
			{
				name:"Acceso Salones VIP",
				num_cols: "1",
				col1: [
					{tipo:"titulo",content:"¿Dónde y cómo solicitar tu Acceso Salones VIP?"},
					{tipo:"sub-titulo",content:"Para Tarjetas de Crédito WorldMember Limited Santander LATAM Pass Mastercard"},
					{tipo:"parrafo",content:"La Tarjeta Priority Pass cambió al servicio de MasterCard Airport Experience, solo deberás cancelar tu acceso a los salones en aeropuertos VIP “Lounge Key” con tu Tarjeta de Crédito WorldMember o WorldMember Limited o WorldMember Business."},
					{tipo:"lista", content:[
						{item:"Si tienes la tarjeta Priority Pass podrás utilizarla hasta el 30 de Agosto de 2017, posteriormente solo deberás mostrar y cancelar directo en los Salones VIP con la Tarjeta de Crédito WorldMember Black o WorldMember Limited"},
						{item:"El cargo del servicio se realizará directo al Cupo Internacional de tu Tarjeta de Crédito WorldMember Black o WorldMember Limited , se visualizará en tus movimientos por facturar al tercer o cuarto día después del acceso al salón. Recuerda que cada visita es de USD27 por persona."},
						{item:"No importa la aerolínea en la que viajes o el pasaje que tengas, disfrutarás de las más de 850 Salas VIP “Lounge Key” en todo el mundo."},
						{item:"Para localizar las Salas VIP y ofertas solo debes descargar la aplicación móvil “MasterCard Airport Experiences” o a través del sitio web <a target='_blank' href='https://airport.mastercard.com'>www.airport.mastercard.com</a>, donde encontrarás:<ul><li>Ofertas culinarias</li><li>Ofertas en tiendas minoristas</li><li>Ofertas de SPA</li></ul>"}
					]},
					{tipo:"sub-titulo",content:"<hr class='pdtop'>Para Tarjetas de Crédito WorldMember Limited Santander LATAM Pass VISA"},
					{tipo:"lista",content:[
						{item:"Luego de recibir tu tarjeta, al ingresar a Santander.cl, con tu Rut y clave de acceso, recibirás un mensaje con el código que necesitas para poder inscribirte y obtener la Membresía Priority Pass."},
						{item:"Cuando recibas el código debes inscribirte en www.prioritypass.com/visa/santanderchile. Conoce el paso a paso de cómo obtener la Membresía Priority Pass <a target='_blank' href='/tarjetas/nuestras-tarjetas/pdf/priority-pass.pdf'>aquí</a>."},
						{item:"Una vez ingreses el código y te inscribas podrás descargar inmediatamente después de realizar tu inscripción, tu nueva Tarjeta Priority Pass DIGITAL"},
						{item:"El envió de la tarjeta física, será realizado directamente por Priority Pass en un plazo máximo de 20 días hábiles una vez realizada tu inscripción."}
					]}
				]
			},
			{
				name:"Tarifas",
				num_cols: "table",
				orientation:"horizontal",
				vigencia:"Tarifa válida contratos celebrados a partir del 3 de marzo 2017.",
				tarjetas:[
					{mastercard: true, head:"WorldMember Limited Santander LATAM Pass"},
					{visa: false, head:""},
					{american: false, head:""}
				],
				col1: [
					{item:"Servicio de compra en cuotas",mastercard:"$0",visa:"$0",american:"$0"},
					{item:"Servicio de aumento temporal de cupo por exceso",mastercard:"$0",visa:"$0",american:"$0"},
					{item:"Comisión de mantención mensual para Cliente con Plan Multiproducto que contemple la tarjeta en mención.",mastercard:"UF 0",visa:"UF 0",american:"UF 0"},
					{item:"Comisión de mantención mensual para Cliente sin Plan Multiproducto que contemple la tarjeta en mención.",mastercard:"UF 0,60 mensual",visa:"UF 0,60 mensual",american:"UF 0,60 mensual"},
					{item:"Descuento del 100% de manutención sobre cuota semestral, por consumo",mastercard:"No aplica",visa:"No aplica",american:"No aplica"},
					{item:"Modalidad de cobro",mastercard:"Vencido a todo evento",visa:"Vencido a todo evento",american:"Vencido a todo evento"},
					{item:"Servicio de avance en efectivo nacional (2)",mastercard:"UF 0,22",visa:"UF 0,22",american:"UF 0,22"},
					{item:"Servicio de avance EN CUOTAS nacional (2)",mastercard:"UF 0,22",visa:"UF 0,22",american:"UF 0,22"},
					{item:"Servicio de súperavance",mastercard:"$9.990",visa:"$9.990",american:"$9.990"},
					{item:"Servicio de avance en el extranjero <sup>(1)</sup>",mastercard:"2,5% + US$ 2,5",visa:"2,5% + US$ 2,5",american:"2,5% + US$ 2,5"},
					{item:"Servicio de compra internacional <sup>(1)</sup>",mastercard:"0%",visa:"0%",american:"0%"},
					{item:"Servicio de avance y compra de divisas",mastercard:"UF 0,18",visa:"UF 0,18",american:"UF 0,18"},
					{item:"Servicio de remisión de tarjeta post bloqueo",mastercard:"No aplica",visa:"No aplica",american:"No aplica"},
					{item:"Servicio express de reemisión de tarjeta post bloqueo",mastercard:"UF 0",visa:"UF 0",american:"UF 0"}
				]
			},
			{
				name:"Requisitos y Condiciones",
				num_cols: "2",
				col1: [
					{tipo:"lista", content: [
							{item:"Nacionalidad Chilena o Extranjero con residencia definitiva en el país."},
							{item:"Edad mínima 21 años."},
							{item:"Ingresos mensuales líquidos superiores a $2.500.000."},
							{item:"Buenos antecedentes comerciales."},
							{item:"La aprobación está sujeta a la política comercial y de riesgo vigente."}
						] 
					},
				],
				col2: [
					{tipo:"parrafo", content: "Para acceder y operar dentro de las Políticas de Crédito de Banco Santander , es necesario que los antecedentes del cliente sean confiables, tengan un adecuado respaldo a través de la documentación mínima exigida, sean verificables cuando corresponda y contengan toda la información completa. Por consiguiente, si estás interesado en adquirir un producto crediticio deberás contar entre otros con:"},
					{tipo:"lista", content:[
							{item:"Una fuente regular, estable de ingresos y/o patrimonio suficiente para el pago del crédito solicitado."},
							{item:"No presentar morosidades o protestos vigentes."},
							{item:"Correcto comportamiento de pago con sus distintos acreedores."},
							{item:"Cumplir con la política definida."}
						] 
					}
				]
			},
			{
				name:"Características Generales",
				num_cols: "2",
				col1: [
					{tipo:"lista", content: [
							{item:"Tecnología CHIP: Te entrega mayor seguridad, minimizando fraudes y mal uso de tus tarjetas. Ahora, en lugar de deslizar tu tarjeta para hacer una compra, deberás insertar la tarjeta en el terminal de venta (POS) mientras se realiza la transacción. Confirmarás tu compra como siempre con tu clave secreta PinPass, logrando mayor seguridad y tranquilidad en tu compra."},
							{item:"Tecnología CONTACTLESS: Esta tecnología ofrece mayor rapidez en tus compras de bajo monto, ya que basta con acercar la tarjeta al lector sin hacer contacto, sin necesidad de entregar la tarjeta, deslizarla por una ranura, ni insertarla en el terminal de venta."},
							{item:"Se puede usar en más de 50.000 establecimientos comerciales a lo largo de Chile y en más de 12 millones en 87 países del mundo."},
						] 
					}
				],
				col2: [
					{tipo:"lista", content:[
							{item:"Recibirás mensualmente un Estado de Cuenta con el detalle de tus compras, pagos y premios ganados."},
							{item:"Planificación de compra con el sistema de cuotas fijas."},
							{item:"Hacer tus compras en 3 cuotas precio contado en los establecimientos adheridos."},
							{item:"Tarjetas adicionales sin costo."},
							{item:"Pago Automático de Cuentas (PAT): Permite cargar tus cuentas de servicios (agua, luz, gas, etc.) en forma automática y pagarlas en una sola fecha todos los meses."},
							{item:"Descuentos especiales en restaurantes y tiendas exclusivas <a target='_blank' href='https://mov.santander.cl/beneficios/?segmento=s-personas'>Ver Súper Descuentos</a>"}
						] 
					}
				]
			},
			{
				name:"Preguntas Frecuentes",
				num_cols: "acordeon",
				col1: [
					{
						title:"¿Qué es el programa LATAM PASS?", 
						content: [
							{tipo:"parrafo", content: "Programa de beneficios que acumula Kilómetros LATAM Pass en el programa Pasajero Frecuente LATAM Pass por las compras realizadas con la Tarjeta de Crédito en Chile y en el extranjero y con la Tarjeta Redcompra Santander. Los kilómetros acumulados pueden ser canjeados por pasajes aéreos en LATAM y en las líneas aéreas asociadas a la alianza Oneworld."}
						] 
					},
					{
						title:"¿Cómo se acumulan kilómetros?", 
						content: [
							{tipo:"parrafo", content: "Programa de beneficios que acumula Kilómetros LATAM Pass en el programa Pasajero Frecuente LATAM Pass por las compras realizadas con la Tarjeta de Crédito en Chile y en el extranjero y con la Tarjeta Redcompra Santander. Los kilómetros acumulados pueden ser canjeados por pasajes aéreos en LATAM y en las líneas aéreas asociadas a la alianza Oneworld."},
							{tipo:"sub-titulo", content: "Por utilización de Tarjetas de Crédito LANPASS y Tarjeta Redcompra Santander:"},
							{tipo:"lista", content: [
									{item:"1,5 KMS. LATAM Pass por cada dólar gastado en Chile o en el extranjero con la Tarjeta de Crédito LATAM Pass Santander<sup>(1)</sup>."},
									{item:"0,5 KMS. LATAM Pass por cada dólar gastado en Chile con la Tarjeta Redcompra Santander <sup>(2)</sup>."},
									{item:"Tú acumulas kilómetros (3) cada vez que vuelas en LATAM, en las líneas aéreas integrantes de oneworld y en las líneas aéreas asociadas a LATAM Pass. Puedes canjear estos kilómetros por pasajes gratis a más de 570 destinos alrededor del mundo. Actualmente, las líneas aéreas integrantes de la alianza oneworld son: LATAM, American Airlines, British Airways, Cathay Pacific, Finnair, Iberia, JAL, Malev, Qantas y Royal Jordanian."}
								]
							}
						] 
					},
					{
						title:"Aceleración de Acumulación de KMS LATAM Pass", 
						content: [
							{tipo:"sub-titulo", content: "¿Cómo funciona la acumulación de extra de KMS LATAM Pass?"},
							{tipo:"parrafo", content: "La facturación de los clientes titulares de Tarjeta de Crédito Worldmember Limited Santander LATAM Pass realizadas con todas sus tarjetas de crédito Santander LATAM Pass en el total de sus compras en un mes calendario entre $1.500.000 y $4.000.000 acumularán un 33% extra de KMS LATAM Pass. Es decir, en vez de acumular 1,5 KMS. LATAM Pass por cada dólar gastado el cliente acumulará 2 KMS LATAM Pass por cada dólar gastado en el rango de compras antes mencionado."},
							{tipo:"sub-titulo", content: "¿El rango de facturación antes mencionado se considera según el respectivo período de facturación?"},
							{tipo:"parrafo", content: "No, el rango de facturación se considerará en base al mes calendario vigente."},	
							{tipo:"sub-titulo", content: "¿El rango de facturación considera solo las compras realizadas con mi Tarjeta de Crédito Worldmember Limited Santander LATAM Pass?"},
							{tipo:"parrafo", content: "No, el beneficio que te entrega tu tarjeta de crédito Worldmember Limited Santander LATAM Pass considera la sumatoria de la facturación de todas tus tarjetas de Crédito Santander LATAM Pass, sean titulares o adicionales."}
						] 
					},
					{
						title:"¿Dónde consultar sus kilómetros?", 
						content: [
							{tipo:"lista", content: [
									{item:"En cualquier oficina LATAM, o en el teléfono 600-526-2000"},
									{item:"En www.latam.com, ingresando nombre de usuario y clave."},
									{item:"Adicionalmente, los kilómetros acumulados son informados mensualmente a través del Estado de Cuenta."}
								]
							}
						] 
					},
					{
						title:"¿Cual es la vigencia de los kilómetros?", 
						content: [
							{tipo:"parrafo", content: "Los Kilómetros originados por compras de Tarjetas LATAM Pass tendrán vigencia hasta el 31 de diciembre del año subsiguiente a la fecha de su generación. En caso de acumular 12.000 kms. o más con el uso de sus Tarjetas Santander LATAM Pass entre Diciembre del año previo y Noviembre del año en que se verifica la definición , se renovará el saldo completo de sus kms por 36 meses."}
						] 
					},
					{
						title:"¿Cómo usar los upgrades?", 
						content: [
							{tipo:"lista", content: [
									{item:"Viajar en un vuelo vendido y operado por LATAM."},
									{item:"Viajar con un pasaje pagado (se excluyen promociones de kilómetros + pesos y algunos programas turísticos)."},
									{item:"Que el precio pagado por ese pasaje cumpla con la tarifa mínima exigida para hacer efectivo el Upgrade. (Familias tarifarías Base Plus, Flexible y Full Flexible)."},
									{item:"Viajar con un pasaje canjeado con KMS LATAM Pass. (en este caso no es requisito acumular KMS LATAM Pass)"},
									{item:"Cumplir con la cantidad de cupones necesaria para ruta."},
									{item:"Que haya espacio disponible en la cabina a la que quiere hacer el Upgrade, en todos los tramos del vuelo para vuelos en tránsito."},
									{item:"La tarifa mínima que aplica para cada ruta, es la definida por el origen y destino final del pasajero que quiere hacer uso del beneficio."},
									{item:"Si los cupones van a ser usados por un acompañante, éste debe viajar en compañía del socio titular de los cupones."},
									{item:"Para utilizar sus cupones de Upgrade, deberá estar acumulando KMS. LATAM Pass en ese vuelo a excepción que esté viajando con un pasaje canjeado con kms."},
									{item:"El cupón es válido hasta la fecha indicada en el Estado de Cuenta de Upgrades."},
									{item:"LATAM se reserva el derecho de modificar las condiciones aplicables al beneficio de Upgrade."},
									{item:"La postulación al Upgrade de cabina debe realizarse a través de LATAM.com desde 48 hasta 2 hrs. Antes de la salida del vuelo"},
									{item:"La postulación de UPG no asegura el acceso a la cabina business, esto depende de los cupos disponibles en el avión, lo cual será confirmado en el Aeropuerto antes de abordar."}
								]
							}
						] 
					},
					{
						title:"Derecho a obtener Kilómetros LATAM Pass acumulados por compras, para acceder a categorías superiores del Programa LATAM Pass", 
						content: [
							{tipo:"titulo", content: "<b>¿Qué es un dólar Elite?</b>"},
							{tipo:"parrafo", content: "Para acceder a una categoría superior en LATAM es necesario realizar un gasto mínimo anual en dólares en pasajes LATAM."},
							{tipo:"parrafo", content: "Dólar Elite se refiere al mínimo de gasto anual en dólares que debe alcanzar un cliente durante el año calendario para acceder a una categoría superior LATAM. Este mínimo de gasto anual considera solo el valor del ticket. Las tasas de embarque, impuestos, o cualquier gasto adicional como exceso de equipaje, asientos +ADELANTE o +ESPACIO, paquetes turísticos y seguros de viaje, no aplican para esta condición."},
							{tipo:"parrafo", content: "Es importante considerar que para efectos del cálculo de los Dólares Elite se consideran vuelos realizados desde el 1 de enero hasta el 31 de diciembre de cada año, independiente de la fecha de compra del pasaje."},
							{tipo:"titulo", content: "<b>¿Qué es un Kilómetro Elite?</b>"},
							{tipo:"parrafo", content: "Existen dos tipos de kilómetros LATAM:"},
							{tipo:"titulo", content: "<b>1. KMS. LATAM Pass </b>"},
							{tipo:"parrafo", content: "Son los KMS que se acumulan volando en LATAM, comprando en comercios asociados o usando sus tarjetas Santander LATAM Pass. Estos Kilómetros pueden ser canjeados por pasajes aéreos u otros servicios que determine el programa LATAM Pass."},
							{tipo:"titulo", content: "<b>2. KMS. Elite </b>"},
							{tipo:"parrafo", content: "Se utilizan para acceder a una categoría de socio Elite LATAM Pass superior. Se denominan así para diferenciarlos de los KMS LATAM Pass y reconocer más fácilmente los kilómetros válidos para la calificación de una categoría LATAM superior."},
							{tipo:"parrafo", content: "Los KMS Elite solo sirven para calificar a una mejor categoría Elite LATAM. Los socios LATAM acumulan los dos tipos de kilómetros: los KMS. LATAM Pass que sirven para canjear y los KMS. Elite que se utilizan para calificar a categorías de socio Elite"},
							{tipo:"titulo", content: "¿Qué beneficio tienen nuestros clientes Tarjeta de Crédito Santander Worldmember Limited LATAM Pass en relación a los KMS Elite?"},
							{tipo:"parrafo", content: "Los clientes de Tarjeta de Crédito Worldmember Limited Santander LATAM Pass obtendrán un regalo en KMS Elite. Este regalo consiste en un 10% de los KMS acumulados por la compras que el cliente realice solo con la tarjeta de crédito Worldmember Limited Santander LATAM Pass en un año calendario por el cliente , con un tope de 20.000 KMS al año. Estos KMS Elite de regalo le ayudarán al cliente a acceder a una categoría superior en LATAM Pass."},
							{tipo:"titulo", content: "¿Cómo calcular sus KMS Elite?"},
							{tipo:"parrafo", content: "Para calcular sus KMS. Elite, debe usar la distancia recorrida multiplicada por un porcentaje que varía según la familia tarifaria que escojas al momento de comprar el pasaje en LATAM. Para más detalles consulte aquí."},
							{tipo:"titulo", content: "¿Dónde consultar sus KMS Elite acumulados?"},
							{tipo:"parrafo", content: "En latam.com, ingresando nombre de usuario y clave, sección “Pasajero Frecuente”, subsección “Revisa tu Estado de Cuenta” podrá revisar sus KMS Elite acumulados, sus Dólares Elite y visualizar su avance en el cumplimiento de las reglas de calificación a una categoría LATAM superior."},
							{tipo:"titulo", content: "¿Cuál es la vigencia de los KMS Elite?"},
							{tipo:"parrafo", content: "Los Kilómetros originados por compras de Tarjetas LATAM Pass tendrán vigencia hasta el 31 de diciembre del año subsiguiente a la fecha de su generación. En caso de acumular 12.000 kms. o más con el uso de sus Tarjetas Santander LATAM Pass entre Diciembre del año previo y Noviembre del año en que se verifica la definición , se renovará el saldo completo de sus kms por 36 meses."}
						] 
					},
					{
						title:"Upgrade con KMS LATAM Pass", 
						content: [
							{tipo:"titulo", content: "¿Qué es un Upgrade con KMS?"},
							{tipo:"parrafo", content: "Un Upgrade es el ascenso de un pasajero a una clase de cabina superior, sin haber adquirido el boleto que corresponda a dicha clase al realizar la compra."},
							{tipo:"parrafo", content: "El Upgrade con KMS te da la posibilidad de acceder a una cabina superior utilizando tus KMS LATAM Pass acumulados en vuelos internacionales comercializados y operados por LATAM Airlines, excepto si viajas con LATAM Airlines Brasil o LATAM Airlines Paraguay. El Upgrade con KMS está siempre sujeto a disponibilidad."},
							{tipo:"titulo", content: "¿Cómo solicito un Upgrade con KMS?"},
							{tipo:"parrafo", content: "Se solicita a través del Call Center de LATAM u oficinas LATAM, al menos 72 horas antes de la salida del vuelo."},
							{tipo:"parrafo", content: "*(Si su pasaje incluye algún tramo en líneas aéreas asociadas, debes acercarte a Oficinas de atención LATAM habilitadas para canje y solicitar la emisión de un documento adicional que debe ser presentado en el aeropuerto al momento del embarque, esto debe ser realizado al menos 72 horas antes de la salida de tu vuelo.)"},
							{tipo:"titulo", content: "¿La cantidad de KMS para realizar un Upgrade con KMS varía según destino?"},
							{tipo:"parrafo", content: "Si, esta cantidad dependerá del destino que elija el cliente. Para revisar cuantos KMS necesita para canjear su Upgrade de cabina según destino ingrese <a target='_blank' href='https://www.latam.com/es_cl/latam-pass/cuantos-kms-necesitas-para-canjear-tus-pasajes/viajes-internacionales/'>aquí</a>."},
							{tipo:"titulo", content: "¿Cuándo puede acceder el cliente al Upgrade con KMS?"},
							{tipo:"parrafo", content: "La opción de acceder a un Upgrade de cabina con KMS estará disponible desde 6 meses antes de la salida de su vuelo hasta 72 horas de la salida del vuelo, siempre considerando que la opción de acceder al Upgrade de cabina está sujeta a la disponibilidad de la cabina business."},
							{tipo:"titulo", content: "¿Puedo acceder a un Upgrade con KMS si canjeé el pasajes con KMS LATAM Pass?"},
							{tipo:"parrafo", content: "No, este beneficio es válido solo para pasajes comprados, no incluye canje de pasajes."},
							{tipo:"titulo", content: "¿El beneficio de Upgrade es exclusivo para el titular de Tarjeta de Crédito Worldmember Limited Santander LATAM Pass?"},
							{tipo:"parrafo", content: "Puedes solicitar un Upgrade de cabina con KMS. LATAM Pass, tanto para ti como tus acompañantes siempre que viajen en el mismo vuelo y fecha, y los pasajes se hayan comprado todos bajo el mismo código de reserva."},
							{tipo:"titulo", content: "¿Es necesario realizar una postulación para obtener un Upgrade con KMS?"},
							{tipo:"parrafo", content: "No, a diferencia del Upgrade tradicional el Upgrade con KMS no requiere de una postulación. El Upgrade con KMS da acceso a la cabina business utilizando los KMS LATAM Pass acumulados por el cliente, siempre sujeto a la disponibilidad de la cabina."},
							{tipo:"titulo", content: "¿Cuántos Upgrade con KMS tengo disponibles?"},
							{tipo:"parrafo", content: "Cliente titular de una Tarjeta de Crédito Worldmember Limited Santander LATAM Pass podrá realizar la cantidad de Upgrade con KMS que le permitan sus KMS LATAM Pass acumulados, y siempre teniendo en consideración que está sujeto a disponibilidad de asientos en la cabina superior."}
						] 
					},
					{
						title:"¿Qué debo hacer para usar el check in preferente?", 
						content: [
							{tipo:"parrafo", content: "Deberá presentar su tarjeta de socio elite (Premium, Premium Silver y Comodoro) entregada por LATAM y chequearse en los counters de clase Ejecutiva que tengan disponibilidad, aunque viaje en clase Turista. Este beneficio es válido sólo para vuelos internacionales, ya sea en LATAM o en las líneas aéreas de oneworld."}
							
						] 
					},
					{
						title:"¿Tengo acceso a boarding preferente?", 
						content: [
							{tipo:"parrafo", content: "No."}
							
						] 
					},
					{
						title:"Algunos vuelos LATAM son operados por otras líneas aéreas, ¿Los beneficios corren en estos casos?", 
						content: [
							{tipo:"parrafo", content: "No. Los beneficios aplican solamente para vuelos operados por LATAM."}
							
						] 
					},
					{
						title:"¿Si tenía Tarjeta Platinum y ahora tengo WorldMember, los beneficios se suman entre ellos?", 
						content: [
							{tipo:"parrafo", content: "No, los beneficios LATAM Pass no son acumulativos a los entregados por las categorías LATAM Pass previamente o a los otorgados con otras Tarjetas Santander LATAM Pass pudiendo obtener en su totalidad y como máximo solamente los beneficios de la Tarjeta WorldMember."}
							
						] 
					},
					{
						title:"Con respecto al equipaje adicional", 
						content: [
							{tipo:"titulo", content: "¿Cuántos kilos puedo llevar por viaje?"},
							{tipo:"parrafo", content: "La cantidad de kilos normales permitidos por vuelo dependerá de la ruta volada y de la cabina. Más detalle en LATAM.com / Información para tu viaje / Equipaje en bodega. Al ser titular de la Tarjeta de Crédito WorldMember Limited Santander LATAM Pass, podrás transportar un equipaje adicional de hasta 23 kilos."},
							{tipo:"titulo", content: "¿Este beneficio aplica a todas las tarifas de LATAM?"},
							{tipo:"parrafo", content: "Si, este beneficio es aplicable para la compra en cualquier tarifa o canje de pasajes en todas sus cabinas."},
							{tipo:"titulo", content: "¿Cuáles son las tarifas de LATAM , que no incluye equipaje en la venta del pasaje?"},
							{tipo:"parrafo", content: "Las tarifas “Promo” y “Light” de LATAM son las únicas que no incluyen equipaje en el costo del pasaje , sin embargo , al ser titular de la Tarjeta de Crédito WorldMember Limited Santander LATAM Pass y haber comprado en estas tarifas podrás transportar un equipaje de hasta 23 kilos"},
							{tipo:"titulo", content: "¿Puedo usar el beneficio de equipaje adicional en todos los vuelos Operados por LATAM?"},
							{tipo:"parrafo", content: "Si, en vuelos operados y embarcados en LATAM desde origen a destino final. Este beneficio no es acumulable con el entregado por la categoría de socio LATAM Pass, por lo tanto como máximo el pasajero tendrá derecho a 1 equipaje adicional de hasta 23 kilos en vuelos LATAM, independiente de su categoría elite."},
							{tipo:"titulo", content: "¿Mis acompañantes también tienen este beneficio?"},
							{tipo:"parrafo", content: "No. Este beneficio es sólo para el titular de la Tarjeta de Crédito WorldMember Limited Santander LATAM Pass."},
							{tipo:"titulo", content: "¿Si mi adicional viaja sólo también tiene acceso a este beneficio?"},
							{tipo:"parrafo", content: "No."},
							{tipo:"titulo", content: "¿Cuántos kilos permite este equipaje adicional?"},
							{tipo:"parrafo", content: "Hasta 23 kilos."},
							{tipo:"titulo", content: "¿Si obtengo Upgrade, tengo posibilidad también de otro equipaje adicional?"},
							{tipo:"parrafo", content: "No."},
							{tipo:"titulo", content: "¿Beneficio de equipaje adicional es sólo cuando compro el pasaje con la tarjeta?"},
							{tipo:"parrafo", content: "No, el beneficio se realiza al presentar la Tarjeta de Crédito WorldMember Limited Santander LATAM Pass en el momento del Check-in, independiente si el pasaje fue comprado o canjeado."},
							{tipo:"titulo", content: "¿Tengo que mostrar la tarjeta para obtener el beneficio o estoy inscrito con mi RUT?"},
							{tipo:"parrafo", content: "Tienes que mostrar la tarjeta al momento del Check-in."},
							{tipo:"titulo", content: "¿Tengo beneficio de equipaje adicional si viajo en otra aerolínea?"},
							{tipo:"parrafo", content: "No, este beneficio aplica solamente para vuelos OPERADOS por LATAM."}
						] 
					}
				]
			}
		]
	},
	// WOLMEMBER BLACK
	{
		url:"worldmemberblack",
		name:"WorldMember Santander LATAM Pass",
		range: 5,
		featured: true,
		tipoTarjeta:"lanpass",
		min_renta:"1.700.000",
		max_renta:"4.300.000",
		clasificacion:"viajes",
		idForm: "9",
		onbording: true,
		title:"VUELA MÁS, ANTES Y MEJOR",
		bajada:"Tu Tarjeta de Crédito WorldMember Santander LATAM Pass, te entrega los mejores beneficios y servicios para hacer de tu viaje en LATAM una experiencia única.",
		imagen: "img/img-tarjetas/santander-worldmember-black.png",
		link:"tarjetas/worldmemberblack/index.asp",
		rutClave:{
			mensaje:"Si tienes una Tarjeta de Crédito WorldMember contratada desde antes del 5 de abril de 2017, revisa los beneficios de tu tarjeta",
			cod:"294"
		},
		ver_mas:[
			{item:"3 Cupones de Upgrade."},
			{item:"Equipaje adicional de hasta 23 kilos (sin costo) al volar, check in preferente al viajar en LATAM en rutas internacionales, y mucho más."}
		],
		legales:[
			{item:"<strong>Vuela Más:</strong>"},
			{item:"La acumulación de KMS. LATAM Pass en cada período mensual de facturación opera hasta el monto del respectivo cupo nacional e internacional autorizado por el Banco para cada tarjeta. Esto aplica para todas las compras y pagos realizados en pesos y/o moneda extranjera en cada periodo. Los abonos que se efectúen durante el período mensual de facturación, aunque confieran nuevas disponibilidades sobre los cupos autorizados, no habilitan la acumulación de mayor número de KMS. LATAM Pass.<br/>Vigencia de los kilómetros : Los kms. acumulados tienen vigencia hasta el 31 de diciembre del año subsiguiente al que fueron acreditados. Si entre diciembre del año anterior y noviembre del año en curso acumulas una cantidad igual o superior a 12.000 KMS. LATAM Pass con el uso de tu Tarjeta de Crédito WorldMember Santander LATAM Pass, renovarás el saldo completo de kms. por 36 meses.<br/>(1) Rubros en lo que no se acumula kms: Se excluyen las siguientes operaciones con Tarjeta de Crédito y/o Redcompra Santander LATAM Pass: compras de cargo inmediato (avances en efectivo, compras en casinos y juegos de azar), compra de combustibles, pago de impuestos en general, notas de débito y/o crédito, así como cargo por intereses o cargos por parte del Banco (comisiones). Acumulación de kilómetros LATAM Pass en cada período mensual de facturación relacionados a compras y pagos efectuados en pesos o moneda extranjera con la Tarjeta de Crédito Santander LATAM Pass, opera hasta el monto del respectivo cupo nacional o internacional autorizado por el Banco para la tarjeta a la fecha del estado de cuenta.<br/>(2) Conozca los términos y condiciones de Multiplica, comercios adheridos, beneficio y vigencia de la adhesión de cada comercio e n www.lan.com/multiplica. El Programa LATAM Pass, Multiplica y el abono y canje de Kilómetros LATAM Pass son responsabilidad de LATAM AIRLINES GROUP S.A., sin que corresponda a Banco Santander Chile intervención en ello. Revise términos y condiciones aquí."},
			{item:"<br/>"},
			{item:"<strong>Vuela Antes:</strong>"},
			{item:"(2) Responsabilidad de bonificación de 25%: Bonificación extra de KMS. LATAM Pass aplicable solo en tarifas, rutas y fechas que permitan la acumulación de KMS. LATAM Pass. Todos estos beneficios se rigen bajo el reglamento LATAM Pass, según se indica en https://www.latam.com/es_cl/latam-pass/.<br/>(3) Solicitud de Anticipo de kms.: El anticipo se debe solicitar en www.santander.cl. Beneficio de anticipo no aplica a clientes que hayan contratado Tarjeta de Crédito WorldMember, que tengan un cupo inferior a $4.000.000.<br/>(4) Transferencia de KMS. LATAM Pass: Revisar términos y condiciones en https://www.latam.com/es_cl/latam-pass/.<br/> "},
			{item:"<br/>"},
			{item:"<strong>Vuela Mejor:</strong>"},
			{item:"(5) Obtención Categoría Gold: Los beneficios Gold provenientes de la tarjeta no son acumulables con otras categorías Elite de LATAM Pass. En caso que un año determinado pierda la categoría, los beneficios asociados a ella no seguirán vigentes, así como tampoco los 6 cupones de UPG entregados por la tarjeta. Podrá recuperar dicha categoría el año siguiente si durante ese año cumple la regla. Esta regla no aplica a clientes que hayan contratado Tarjeta de Crédito WorldMember, que tengan un cupo inferior a $4.000.000.<br/>(6) Cupones Upgrade: Los clientes titulares de la Tarjeta de Crédito WorldMember Santander LATAM Pass recibirán en total un máximo de 3 cupones de Upgrade anuales. Los cupones de Upgrade, estarán vigentes hasta el 31 de marzo del año siguiente a aquel en que fueron entregados y se renovarán automáticamente siempre y cuando la tarjeta se encuentre vigente y utilizable. Los cupones no son acumulables año a año. Se excluyen pasajes comprados en familia tarifaria Base.<br/>(7) Responsabilidad Salones Vip LATAM: Acceso a Salón VIP Grupo LATAM Airlines Santiago es responsabilidad de LATAM AIRLINES GROUP S.A. El acceso está limitado a la capacidad del salón.<br/>(8) Uso de Salones en el aeropuerto y precio Priority Pass –Lounge KEY: El acceso a los salones internacionales será con cargo al cliente, con un costo de US$27 por persona. Antes de viajar puede ingresar a www.prioritypass.com o https://www.loungekey.com/es y ver directorio de salas de aeropuertos disponibles.<br/>(9) Condiciones Salones Pacific: El acceso a salones vip Pacific Club es gratuito solamente para el titular de la tarjeta y es de exclusiva responsabilidad de Servicios Aeroportuarios S.A. Estos beneficios se otorgan solamente al titular de la Tarjeta de Crédito WorldMember Santander LATAM Pass y no son acumulables a aquellos entregados a los clientes con anterioridad, pudiendo obtener en su totalidad y como máximo solamente los beneficios antes descritos. Programa LATAM Pass y todos los beneficios LATAM Pass asociados a la tarjeta son de exclusiva responsabilidad de LATAM AIRLINES GROUP S.A., no cabiéndole a Banco Santander Chile responsabilidad alguna en ello ni en la ulterior atención que ello demande. Para obtener el detalle y condiciones de cada beneficio puede llamar al (600) 320 3030 o consultar en www.santander.cl o www.latam.com"},
			{item:"<br/>"},
			{item:"<strong>Seguros y Servicios:</strong>"},
			{item:"*Suscrito por AIG LATIN AMERICA, I.I.; póliza 009-000787. Aplican restricciones y condiciones de póliza.** Servicio proporcionado por AXA Assistance USA. Aplican restricciones."},
			{item:"<br/>"},
			{item:"<strong>Tarifas:</strong>"},
			{item:"(1) Los porcentajes deben aplicar por el monto del avance o compra según corresponda.<br/>(2) Comisión aplica a cada transacción de avance en efectivo en chile. Tarifa válida a partir de 01 de diciembre de 2013 hasta 31 de diciembre de 2017. A partir de esta última fecha, aplica la tarifa precisada en el contrato del cliente. <br/>El Banco se reserva el derecho a modificarlas, conforme a las normas impartidas por la Superintendencia de Bancos. El cliente, en caso de no estar conforme con las comisiones informadas podrá poner término a su contrato. Este tarifado no aplica a Tarjetas Santander Banefe."},
			{item:"<br/>"},
			{item:"<strong>Preguntas Frecuentes:</strong>"},
			{item:"(1) Se excluyen las siguientes operaciones con Tarjeta de Crédito LATAM Pass: compras de cargo inmediato (avances en efectivo, compras en casinos y juegos de azar), compra de combustibles, pago de impuestos en general (contribuciones, IVA, etc), notas de débito y/o crédito, así como cargos por intereses o cargos por parte del Banco (comisiones).</br>(2) Beneficio exclusivo para clientes de Tarjetas de Crédito LATAM Pass que posean la Tarjeta Redcompra Santander. Se bonifican las compras realizadas en establecimientos comerciales adheridos a Transbank S.A. Se excluyen compras de combustible, casinos, juegos de azar y pagos de impuesto en general, los que no generan kilómetros LATAM Pass. Se excluyentambién los giros en cajeros automáticos Redbanc. Los kilómetros acumulados se verán reflejados en la cuenta del titular LATAM Pass al mes siguiente o subsiguiente de realizadas las compras. Los beneficios del programa LATAM Pass son de exclusiva responsabilidad de LATAM AIRLINES GROUP S.A, no cabiéndole a Banco Santander Chile responsabilidad alguna en ello ni en la ulterior atención que ello demande.<br/>(3) En tarifas, rutas y fechas limitadas que permitan la acumulación de kilómetros LATAM Pass."}
		],
		tabs: [
			{
				name:"Beneficios Tarjetas",
				num_cols: "1",
				col1: [
					{tipo:"titulo", content: "Vuela más"},
					{tipo:"sub-titulo", content: "Beneficio de Acumulación de kilómetros"},
					{tipo:"lista", content: [
						{item:"<strong>1,5 KMS. LATAM Pass por dólar gastado</strong> en todas las compras en Chile y el extranjero realizadas con la Tarjeta de Crédito. (1)"},
						{item:"<strong>0,5 KMS. LATAM Pass por dólar gastado</strong> en compras realizadas con la Tarjeta de Débito (Redcompra) en Chile y en el extranjero. <sup>(1)</sup>"},
						{item:"<strong>Multiplica tus KMS LATAM Pass.</strong> Todas tus compras con Tarjetas de Crédito Santander LATAM Pass, en tiendas adheridas, multiplicarán los kms. que acumulas (2). Revisa las tiendas adheridas <a href='http://www.lan.com/multiplica' target='_blank'>aquí</a>"}
					]},
					{tipo:"titulo",content:"Vuela antes"},
					{tipo:"lista",content:[
						{item:"<strong>Acumulación de 25% de KMS. LATAM Pass adicionales al viajar. (2)</strong> <br/>Bono adicional de kms. sobre la distancia acumulada en vuelos al viajar en LATAM y American Airlines. (Beneficio asociado a categoría Gold)."},
						{item:"<strong>Anticipo de 60.000 KMS. LATAM Pass para usarlos cuando quieras (3)</strong>"},
						{item:"<strong>Transferencia de KMS. LATAM Pass sin costo.<sup>(4)</sup> </strong> <br/>Cada año, la primera transferencia de kms. que realice el titular de la Tarjeta de Crédito WorldMember Santander LATAM Pass no tendrá costos asociados. Para acceder a este beneficio, dicha transferencia deberá contemplar como mínimo 15.000 KMS. LATAM Pass y como máximo 100.000 KMS. LATAM Pass."}
					]},
					{tipo:"titulo",content:"Vuela mejor"},
					{tipo:"tarjeta",content:[
						{item:"<strong>Acceso a Categoría Elite Programa de Pasajero Frecuente LATAM Pass (5).</strong>"}
					]},
					{tipo:"sub-titulo",content:"Beneficios y servicios asociados al viaje"},
					{tipo:"lista",content:[
						{item:"<strong>Sin comisión en compras internacionales.</strong>"},
						{item:"<strong>3 Cupones de Upgrade LATAM Pass anuales. (6)</strong> <br/> Un Upgrade permite acceder a la clase de servicio inmediatamente superior en vuelos vendidos y operados por LATAM. Es decir, si compras un pasaje en Clase Economy, te permite acceder a Clase Business. <br/><br/> Los cupones Upgrade de la tarjeta WorldMember Santander LATAM Pass no son acumulables con otros beneficios de categorías Elite de LATAM Pass. Revisa más detalles de este beneficio <a href='https://www.latam.com/es_cl/latam-pass/upgrade-de-cabina/upgrade-de-cortesia/' target='_blank'>aquí.</a>"},
						{item:"<strong>Check-ln preferente en Aeropuerto de Santiago Arturo Merino Benitez al viajar en LATAM, en rutas internacionales.. </strong> <br/>Podrás chequearte en los counters preferentes en el Aeropuerto de Santiago Arturo Merino Benitez, junto a un acompañante de vuelo. Solo debes mostrar tu Tarjeta de Crédito Worldmember LATAM Pass. Este beneficio se encuentra disponible solo para las rutas internacionales y es válido para vuelos en LATAM. Beneficio asociado a categoría Elite Gold LATAM Pass."},
						{item:"<strong>Equipaje adicional de hasta 23 kilos (sin costo) al volar en LATAM </strong> <br/> En vuelos nacionales e internacionales, vendidos y operados por LATAM desde origen a destino final, el tarjetahabiente de WorldMember Santander LATAM Pass cuenta siempre con el beneficio exclusivo de una pieza adicional de equipaje de hasta 23 kg sin costo. Beneficio no acumulable con otros entregados en rutas específicas. <br/> Para acceder a este beneficio, debes presentar tu Tarjeta de Crédito WorldMember Santander LATAM Pass al agente de counter en el aeropuerto."},
						{item:"<strong>Prioridad de Equipaje </strong> <br/> En vuelos internacionales vendidos y operados por LATAM el equipaje será etiquetado en el aeropuerto con el fin de darle prioridad en el desembarque del vuelo. Beneficio asociado a categoría Gold."},
						{item:"<strong>Acceso a Salón VIP Grupo LATAM Airlines Santiago con acompañante (7)</strong> <br/>Al volar en LATAM podrás acceder gratis junto a un acompañante al Salón VIP Grupo LATAM Airlines Santiago. Si deseas ingresar con más de un acompañante (incluyendo niños), tendrá un costo adicional.<br/>Durante períodos de alta temporada, es posible que el acceso a ciertos salones VIP se restrinjan debido a limitaciones de capacidad."},
						{item:"<strong>Acceso a los Salones de Aeropuerto (8)</strong><br/> Revisa <a href='/tarjetas/nuestras-tarjetas/pdf/salones-vip.pdf' target='_blank'>aquí</a> detalles y condiciones de acceso."},
						{item:"<strong>Acceso a Salones Pacific Club en Chile.(9) </strong> <br/> Revisa <a target='_blank' href='/tarjetas/nuestras-tarjetas/pdf/salones-vip.pdf' target='_blank'>aquí</a> detalles y condiciones de acceso."}
					]},
					{tipo:"importante",content:[
						{item:"Estos beneficios se otorgan solamente al titular de la tarjeta y no son acumulables por tarjeta de crédito contratada. ( ej: si tienes una tarjeta de crédito Worldmember Limited Santander LATAM Pass y una tarjeta de crédito Worldmember Santander LATAM Pass , solo prevalecerá el uso de los beneficios de una tarjeta de crédito) Los beneficios de categoría Gold LATAM Pass no son acumulables con otras categorías Elite de LATAM Pass. Los beneficios no financieros del Programa Santander LATAM Pass rigen hasta el 31 de diciembre de 2017."},
						{item:"Todos los beneficios y categoría Gold LATAM Pass asociados a tu tarjeta quedarán activos hasta 15 días hábiles después de activada la tarjeta. Para mantener la categoría debes realizar compras durante un año por al menos $4.000.000. En caso que un año determinado se pierda la categoría, podrás recuperarla para el año siguiente si durante ese año se cumple la regla. Restitución de categoría, en caso que aplique, se realiza durante el mes de abril del año siguiente."},
						{item:"Beneficios del Programa Santander LATAM Pass se otorgan al titular de la tarjeta y no son acumulables por Tarjeta de Crédito contratada o con categorías Elite superiores del programa LATAM Pass."},
						{item:"Plazo de Activación de beneficios asociados a tu Tarjeta de Crédito (incluyendo categoría Gold LATAM Pass), quedarán activos en un plazo de 15 días hábiles contados desde la activación de dicha tarjeta."},
						{item:"Revisa detalles y condiciones de los beneficios en cada apartado de beneficios de vuela más, antes y mejor."}
					]}
				]
			},
			{
				name:"Seguros y Servicios",
				num_cols: "servicios",
				pdf:"../../pdf/guia_beneficios_world_member.pdf",
				col1:[
					{
						tabs:[
							{name:"MasterCard", content:[
								{name:"Servicios", content:[
									{item:"Servicio de asistente personal: Concierge"},
									{item:"Servicio de Asistencia al viajero"},
									{item:"MasterCard Global Service"},
									{item:"Wi-Fi Boingo"},
									{item:"Travel Service Mastercard"}
								]},
								{name:"Experiencias", content:[
									{item:"Priceless Cities"},
									{item:"MasterCard Traveler Rewards"}
								]},
								{name:"Seguros", content:[
									{item:"MasterCard Assist Plus (US$150.000)"},
									{item:"Seguro de Schengen"},
									{item:"MasterCard Seguro de Auto (Cobertura de US $75.000 (Alrededor del mundo) hasta 60 días consecutivos.)"},
									{item:"Garantía Extendida (Hasta US $2.500 por Ocurrencia / US $5.000 por 12 meses)"},
									{item:"Seguro de Pérdida o Retraso de Equipaje (Pérdida de equipaje hasta por US $3.000 Retraso de equipaje hasta por US $600 (más de 4 horas)."},
									{item:"Protección de Compras (Hasta US $5.000 por Ocurrencia / US $20.000 por 12 meses, hasta 90 días después de realizada la compra cubierta)"},
									{item:"Protección Contra Asalto o Robo ATM (Cobertura por efectivo robado hasta por US $1.000 / US $3.000 por 12 meses Cobertura por muerte accidental US $10.000)"},
									{item:"Seguro Inconvenientes de Viaje (Cancelación de viajes hasta US $3.000). Demoras de viajes hasta US $200 (más de 4 horas)."}
								]}
							]},
							{name:"Visa", content:[
								{name:"Servicios", content:[
									{item:"Servicio de asistente personal: Concierge"},
									{item:"Servicio de Información al Viajero"},
									{item:"Reposición de Tarjeta y Desembolso de Efectivo de Emergencia"},
									{item:"4 Transportes Anuales Gratuitos al Aeropuerto"},
									{item:"Priority pass"}
								]},
								{name:"Experiencias", content:[
									{item:"Visa Luxury Hotel Collection"},
									{item:"Ofertas Exclusivas Visa Signature"}
								]},
								{name:"Seguros", content:[
									{item:"Servicio de Emergencia Médica Internacional (US$200.000)"},
									{item:"Seguro de Schengen"},
									{item:"Seguro de Alquiler de Autos"},
									{item:"Garantía Extendida (US$10.000)"},
									{item:"Protección de Pérdida (US$1.000 )"},
									{item:"Retraso de Equipaje (US$500 )"},
									{item:"Protección de Compras (US$10.000)"},
									{item:"Seguro de Accidentes en Viajes (US$1.000.000)"},
									{item:"Protección de Precios (US$2.000)"}
								]}
							]}
						]
					}
				]
			},
			{
				name:"Acceso Salones VIP",
				num_cols: "1",
				col1: [
					{tipo:"titulo",content:"¿Dónde y cómo solicitar tu Acceso Salones VIP?"},
					{tipo:"sub-titulo",content:"Para Tarjetas de Crédito WorldMember Limited Santander LATAM Pass Mastercard"},
					{tipo:"parrafo",content:"La Tarjeta Priority Pass cambió al servicio de MasterCard Airport Experience, solo deberás cancelar tu acceso a los salones en aeropuertos VIP “Lounge Key” con tu Tarjeta de Crédito WorldMember o WorldMember Limited o WorldMember Business."},
					{tipo:"lista",content:[
						{item:"Si tienes la tarjeta Priority Pass podrás utilizarla hasta el 30 de Agosto de 2017, posteriormente solo deberás mostrar y cancelar directo en los Salones VIP con la Tarjeta de Crédito WorldMember Black o WorldMember Limited"},
						{item:"El cargo del servicio se realizará directo al Cupo Internacional de tu Tarjeta de Crédito WorldMember Black o WorldMember Limited , se visualizará en tus movimientos por facturar al tercer o cuarto día después del acceso al salón. Recuerda que cada visita es de USD27 por persona."},
						{item:"No importa la aerolínea en la que viajes o el pasaje que tengas, disfrutarás de las más de 850 Salas VIP “Lounge Key” en todo el mundo."},
						{item:"Para localizar las Salas VIP y ofertas solo debes descargar la aplicación móvil “MasterCard Airport Experiences” o a través del sitio web <a href='www.airport.mastercard.com' target='_blank'>www.airport.mastercard.com</a>, donde encontrarás: <br/><br/> <span class='success'>Ofertas culinarias</span><br/> <span class='success'>Ofertas en tiendas minoristas</span><br/> <span class='success'>Ofertas de SPA</span>"}
					]},
					{tipo:"sub-titulo",content:"<hr class='pdtop'>Para Tarjetas de Crédito WorldMember Santander LATAM Pass VISA"},
					{tipo:"lista",content:[
						{item:"Luego de recibir tu tarjeta, al ingresar a Santander.cl, con tu Rut y clave de acceso, recibirás un mensaje con el código que necesitas para poder inscribirte y obtener la Membresía Priority Pass."},
						{item:"Cuando recibas el código debes inscribirte en www.prioritypass.com/VISA/SANTANDERCHILE. Conoce el paso a paso de cómo obtener la Membresía Priority Pass <a href='/tarjetas/nuestras-tarjetas/pdf/priority-pass.pdf' target='_blank'>aquí</a>"},
						{item:"Una vez ingreses el código y te inscribas podrás descargar inmediatamente después de realizar tu inscripción, tu nueva Tarjeta Priority Pass DIGITAL"},
						{item:"El envió de la tarjeta física, será realizado directamente por Priority Pass en un plazo máximo de 20 días hábiles una vez realizada tu inscripción."}
					]}
				]
			},
			{
				name:"Tarifas",
				num_cols: "table",
				orientation:"horizontal",
				vigencia:"Tarifa válida contratos celebrados a partir del 3 de marzo 2017.",
				tarjetas:[
					{mastercard: true, head:"WorldMember Santander LATAM Pass"},
					{visa: false, head:""},
					{american: false, head:""}
				],
				col1: [
					{item:"Servicio de compra en cuotas",mastercard:"$0"},
					{item:"Servicio de aumento temporal de cupo por exceso",mastercard:"$0"},
					{item:"Comisión de mantención mensual para Cliente con Plan Multiproducto que contemple la tarjeta en mención.",mastercard:"UF 0"},
					{item:"Comisión de mantención mensual para Cliente sin Plan Multiproducto que contemple la tarjeta en mención.",mastercard:"UF 0,34 mensual"},
					{item:"Descuento del 100% de mantención sobre cuota semestral, por consumo",mastercard:"No aplica"},
					{item:"Modalidad de cobro",mastercard:"Vencido a todo evento"},
					{item:"Servicio de avance en efectivo nacional (2)",mastercard:"UF 0,22"},
					{item:"Servicio de avance EN CUOTAS nacional (2)",mastercard:"UF 0,22"},
					{item:"Servicio de avance en el extranjero <sup>(1)</sup>",mastercard:"2,5% + US$ 2,5"},
					{item:"Servicio de súperavance",mastercard:"$9.990"},
					{item:"Servicio de compra internacional <sup>(1)</sup>",mastercard:"0%"},
					{item:"Servicio de avance y compra de divisas",mastercard:"UF 0,18"},
					{item:"Servicio de remisión de tarjeta post bloqueo",mastercard:"No Aplica"},
					{item:"Servicio express de remisión de tarjeta post bloqueo",mastercard:"UF 0"}
				]
			},
			{
				name:"Requisitos y Condiciones",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
							{item:"Nacionalidad Chilena o Extranjero con residencia definitiva en el país."},
							{item:"Edad mínima 21 años."},
							{item:"Ingresos mensuales líquidos superiores a $1.700.000."},
							{item:"Buenos antecedentes comerciales."},
							{item:"La aprobación está sujeta a la política comercial y de riesgo vigente."}
						] 
					},
					{tipo:"parrafo", content: "Para acceder y operar dentro de las Políticas de Crédito de Banco Santander , es necesario que los antecedentes del cliente sean confiables, tengan un adecuado respaldo a través de la documentación mínima exigida, sean verificables cuando corresponda y contengan toda la información completa. Por consiguiente, si estás interesado en adquirir un producto crediticio deberás contar entre otros con:"},
					{tipo:"lista", content: [
							{item:"Una fuente regular, estable de ingresos y/o patrimonio suficiente para el pago del crédito solicitado."},
							{item:"No presentar morosidades o protestos vigentes."},
							{item:"Correcto comportamiento de pago con sus distintos acreedores."},
							{item:"Cumplir con la política definida."}
						] 
					}
				]	
			},
			{
				name:"Características Generales",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
							{item:"<strong>Tecnología CHIP: </strong>Te entrega mayor seguridad, minimizando fraudes y mal uso de tus tarjetas. Ahora, en lugar de deslizar tu tarjeta para hacer una compra, deberás insertar la tarjeta en el terminal de venta (POS) mientras se realiza la transacción. Confirmarás tu compra como siempre con tu clave secreta PinPass, logrando mayor seguridad y tranquilidad en tu compra."},
							{item:"<strong>Tecnología CONTACTLESS: </strong>Esta tecnología ofrece mayor rapidez en tus compras de bajo monto, ya que basta con acercar la tarjeta al lector sin hacer contacto, sin necesidad de entregar la tarjeta, deslizarla por una ranura, ni insertarla en el terminal de venta."},
							{item:"Se puede usar en más de 50.000 establecimientos comerciales a lo largo de Chile y en más de 12 millones en 87 países del mundo."},
							{item:"Recibirás mensualmente un Estado de Cuenta con el detalle de tus compras, pagos y premios ganados."},
							{item:"Planificación de compra con el sistema de cuotas fijas."},
							{item:"Hacer tus compras en 3 cuotas precio contado en los establecimientos adheridos."},
							{item:"Tarjetas adicionales sin costo."},
							{item:"Pago Automático de Cuentas (PAT): Permite cargar tus cuentas de servicios (agua, luz, gas, etc.) en forma automática y pagarlas en una sola fecha todos los meses."},
							{item:"Descuentos especiales en restaurantes y tiendas exclusivas <a href='https://mov.santander.cl/beneficios?segmento=s-personas' target='_blank'>Ver Súper Descuentos</a>"}
						] 
					}
				]
			},
			{
				name:"Preguntas Frecuentes",
				num_cols: "acordeon",
				col1: [
					{
						title:"¿Qué es el programa LATAM PASS?", 
						content: [
							{tipo:"parrafo", content: "Programa de beneficios que acumula Kilómetros LATAM Pass en el programa Pasajero Frecuente LATAM Pass por las compras realizadas con la Tarjeta de Crédito en Chile y en el extranjero y con la Tarjeta Redcompra Santander. Los kilómetros acumulados pueden ser canjeados por pasajes aéreos en LATAM en las líneas aéreas asociadas a la alianza Oneworld o por productos del catálogo de LATAM Pass."}
						] 
					},
					{
						title:"¿Cómo se acumulan kilómetros?", 
						content: [
							{tipo:"lista", content: [
								{item:"Por utilización de Tarjetas de Crédito LATAM Pass y Tarjeta Redcompra Santander: <br/><br/> <span class='succes'>1,5 KMS. LATAM Pass por cada dólar gastado en Chile o en el extranjero con la Tarjeta de Crédito LATAM Pass Santander<sup>(1)</sup>.</span><br/> <span class='succes'>0,5 KM. LATAM Pass por cada dólar gastado en Chile con la Tarjeta Redcompra Santander (2).</span>"},
								{item:"Por vuelos:<br/><br/> <span class='succes'>Tú acumulas kilómetros (3) cada vez que vuelas en LATAM, en las líneas aéreas integrantes de oneworld y en las líneas aéreas asociadas a LATAM Pass. Puedes canjear estos kilómetros por pasajes gratis a más de 570 destinos alrededor del mundo. Actualmente, las líneas aéreas integrantes de la alianza oneworld son: LATAM, American Airlines, British Airways, Cathay Pacific, Finnair, Iberia, JAL, Malev, Qantas y Royal Jordanian.</span>"}
							]}
						] 
					},	
					{
						title:"¿Dónde consultar sus kilómetros?", 
						content: [
							{tipo:"lista", content: [
								{item:"En cualquier oficina LATAM, o en el teléfono 600-526-200"},
								{item:"En www.latam.com, ingresando nombre de usuario y clave"},
								{item:"Adicionalmente, los kilómetros acumulados son informados mensualmente a través del Estado de Cuenta."}
							]}
						] 
					},	
					{
						title:"¿Cuál es la vigencia de los kilómetros?", 
						content: [
							{tipo:"parrafo", content: "Los Kilómetros originados por compras de Tarjetas LATAM Pass tendrán vigencia hasta el 31 de diciembre del año subsiguiente a la fecha de su generación. pero si entre Enero y Noviembre de un año, acumula 12.000 kms. o más con el uso de sus Tarjetas Santander LATAM Pass, renovará su saldo completo de kms por 36 meses."}
						] 
					},	
					{
						title:"¿Cómo usar los Upgrades?", 
						content: [
							{tipo:"lista", content: [
								{item:"Viajar en un vuelo vendido y operado por LATAM."},
								{item:"Viajar con un pasaje pagado (se excluyen promociones de kilómetros + pesos y algunos programas turísticos)."},
								{item:"Que el precio pagado por ese pasaje cumpla con la tarifa mínima exigida para hacer efectivo el Upgrade. (Familias tarifarías Base Plus, Flexible y Full Flexible)."},
								{item:"Viajar con un pasaje canjeado con KMS LATAM Pass. (en este caso no es requisito acumular KMS LATAM Pass)"},
								{item:"Cumplir con la cantidad de cupones necesaria para ruta."},
								{item:"Que haya espacio disponible en la cabina a la que quiere hacer el Upgrade, en todos los tramos del vuelo para vuelos en tránsito."},
								{item:"La tarifa mínima que aplica para cada ruta, es la definida por el origen y destino final del pasajero que quiere hacer uso del beneficio."},
								{item:"Si los cupones van a ser usados por un acompañante, éste debe viajar en compañía del socio titular de los cupones."},
								{item:"Para utilizar sus cupones de Upgrade, deberá estar acumulando KMS. LATAM Pass en ese vuelo a excepción que esté viajando con un pasaje canjeado con kms."},
								{item:"El cupón es válido hasta la fecha indicada en el Estado de Cuenta de Upgrades."},
								{item:"LATAM se reserva el derecho de modificar las condiciones aplicables al beneficio de Upgrade."},
								{item:"La postulación al Upgrade de cabina debe realizarse a través de LATAM.com desde 48 hasta 2 hrs. Antes de la salida del vuelo"},
								{item:"La postulación de UPG no asegura el acceso a la cabina business, esto depende de los cupos disponibles en el avión, lo cual será confirmado en el Aeropuerto antes de abordar."}
							]}
						] 
					},	
					{
						title:"¿Qué debo hacer para usar el check in preferente?", 
						content: [
							{tipo:"parrafo", content: "Deberá presentar su tarjeta de socio elite (Premium, Premium Silver y Comodoro) entregada por LATAM y chequearse en los counters de clase Ejecutiva que tengan disponibilidad, aunque viaje en clase Turista. Este beneficio es válido sólo para vuelos internacionales, ya sea en LATAM o en las líneas aéreas de oneworld."}
						] 
					},	
					{
						title:"¿Tengo acceso a boarding preferente?", 
						content: [
							{tipo:"parrafo", content: "No."}
						] 
					},	
					{
						title:"Algunos vuelos LATAM son operados por otras líneas aéreas, ¿Los beneficios corren en estos casos?", 
						content: [
							{tipo:"parrafo", content: "No. Los beneficios aplican solamente para vuelos operados por LATAM."}
						] 
					},	
					{
						title:"¿Si tenía Tarjeta Platinum y ahora tengo WorldMember, los beneficios se suman entre ellos?", 
						content: [
							{tipo:"parrafo", content: "No, los beneficios LATAM Pass no son acumulativos a los entregados por las categorías LATAM Pass previamente o a los otorgados con otras Tarjetas Santander LATAM Pass pudiendo obtener en su totalidad y como máximo solamente los beneficios de la Tarjeta WorldMember."}
						] 
					},	
					{
						title:"Con respecto al equipaje adicional", 
						content: [
							{tipo:"sub-titulo", content: "¿Cuántos kilos puedo llevar por viaje?"},
							{tipo:"parrafo", content:"La cantidad de kilos normales permitidos por vuelo dependerá de la ruta volada y de la cabina. Más detalle en LATAM.com / Información para tu viaje / Equipaje en bodega. Al ser titular de la Tarjeta de Crédito WorldMember Santander LATAM Pass, podrás transportar un equipaje adicional de hasta 23 kilos."},
							{tipo:"sub-titulo",content:"¿Este beneficio aplica a todas las tarifas de LATAM?"},
							{tipo:"parrafo",content:"Si, este beneficio es aplicable para la compra en cualquier tarifa o canje de pasajes en todas sus cabinas."},
							{tipo:"sub-titulo",content:"¿Cuáles son las tarifas de LATAM , que no incluye equipaje en la venta del pasaje?"},
							{tipo:"parrafo",content:"Las tarifas “Promo” y “Light” de LATAM son las únicas que no incluyen equipaje en el costo del pasaje , sin embargo , al ser titular de la Tarjeta de Crédito WorldMember Santander LATAM Pass y haber comprado en estas tarifas podrás transportar un equipaje de hasta 23 kilos."},
							{tipo:"sub-titulo",content:"¿Puedo usar el beneficio de equipaje adicional en todos los vuelos Operados por LATAM?"},
							{tipo:"parrafo",content:"Si, en vuelos operados y embarcados en LATAM desde origen a destino final.Este beneficio no es acumulable con el entregado por la categoría de socio LATAM Pass, por lo tanto como máximo el pasajero tendrá derecho a 1 equipaje adicional de hasta 23 kilos en vuelos LATAM, independiente de su categoría elite."},
							{tipo:"sub-titulo",content:"¿Mis acompañantes también tienen este beneficio?"},
							{tipo:"parrafo",content:"No. Este beneficio es sólo para el titular de la Tarjeta de Crédito WorldMember Santander LATAM Pass."},
							{tipo:"sub-titulo",content:"¿Si mi adicional viaja sólo también tiene acceso a este beneficio?"},
							{tipo:"parrafo",content:"No."},
							{tipo:"sub-titulo",content:"¿Cuántos kilos permite este equipaje adicional?"},
							{tipo:"parrafo",content:"Hasta 23 kilos."},
							{tipo:"sub-titulo",content:"¿Si obtengo Upgrade, tengo posibilidad también de otro equipaje adicional?"},
							{tipo:"parrafo",content:"No."},
							{tipo:"sub-titulo",content:"¿Beneficio de equipaje adicional es sólo cuando compro el pasaje con la tarjeta?"},
							{tipo:"parrafo",content:"No, el beneficio se realiza al presentar la Tarjeta de Crédito WorldMember Santander LATAM Pass en el momento del Check-in, independiente si el pasaje fue comprado o canjeado."},
							{tipo:"sub-titulo",content:"¿Tengo que mostrar la tarjeta para obtener el beneficio o estoy inscrito con mi RUT?"},
							{tipo:"parrafo",content:"Tienes que mostrar la tarjeta al momento del Check-in."},
							{tipo:"sub-titulo",content:"¿Tengo beneficio de equipaje adicional si viajo en otra aerolínea?"},
							{tipo:"parrafo",content:"No, este beneficio aplica solamente para vuelos OPERADOS por LATAM."}
						] 
					}
				]
			}
		]
	},
	// PLATINUM SANTANDER LATAM PASS
	{
		url:"platinumsantander",
		name:"Platinum Santander LATAM PASS",
		range: 5,
		min_renta:"1.000.000",
		max_renta:"1.899.999",
		featured: true,
		tipoTarjeta:"lanpass",
		clasificacion:"viajes",
		idForm: "1",
		onbording: true,
		title:"VUELA MÁS, ANTES Y MEJOR",
		bajada:"Tu Tarjeta de Crédito Platinum Santander LATAM Pass, te entrega los mejores beneficios y servicios para hacer de tu viaje en LATAM una experiencia única.",
		imagen: "img/img-tarjetas/santander-platinum-lanpass.png",
		link:"tarjetas/platinumsantander/index.asp",
		ver_mas:[
			{item:"Accede a la categoría Gold LATAM Pass."},
			{item:"Acumula KMS. LATAM Pass por compras con tu Tarjeta de Crédito y débito."}
		],
		legales:[
			{item:"<strong>Vuela Más:</strong>"},
			{item:"La acumulación de KMS. LATAM Pass en cada período mensual de facturación opera hasta el monto del respectivo cupo nacional e internacional autorizado por el Banco para cada tarjeta. Esto aplica para todas las compras y pagos realizados en pesos y/o moneda extranjera en cada periodo. Los abonos que se efectúen durante el período mensual de facturación, aunque confieran nuevas disponibilidades sobre los cupos autorizados, no habilitan la acumulación de mayor número de KMS. LATAM Pass."},
			{item:"Vigencia de los kilómetros : Los kms. acumulados tienen vigencia hasta el 31 de diciembre del año subsiguiente al que fueron acreditados. Si entre diciembre del año anterior y noviembre del año en curso acumulas una cantidad igual o superior a 12.000 KMS. LATAM Pass con el uso de tu Tarjeta de Crédito WorldMember Santander LATAM Pass, renovarás el saldo completo de kms. por 36 meses."},
			{item:"(1) Se excluyen las siguientes operaciones con Tarjeta de Crédito y/o Redcompra Santander LATAM Pass: compras de cargo inmediato (avances en efectivo, compras en casinos y juegos de azar), compra de combustibles, pago de impuestos en general, notas de débito y/o crédito, así como cargo por intereses o cargos por parte del Banco (comisiones). Acumulación de kilómetros LATAM Pass en cada período mensual de facturación relacionados a compras y pagos efectuados en pesos o moneda extranjera con la Tarjeta de Crédito Santander LATAM Pass, opera hasta el monto del respectivo cupo nacional o internacional autorizado por el Banco para la tarjeta a la fecha del estado de cuenta."},
			{item:"(2) Conozca los términos y condiciones de Multiplica, comercios adheridos, beneficio y vigencia de la adhesión de cada comercio en www.lan.com/multiplica. El Programa LATAM Pass, Multiplica y el abono y canje de Kilómetros LATAM Pass son responsabilidad de LATAM AIRLINES GROUP S.A., sin que corresponda a Banco Santander Chile intervención en ello. Revise términos y condiciones aquí."},
			{item:"<br/>"},
			{item:"<strong>Vuela Antes:</strong>"},
			{item:"(2) Bonificación extra de KMS. LATAM Pass aplicable solo en tarifas, rutas y fechas que permitan la acumulación de KMS. LATAM Pass. Todos estos beneficios se rigen bajo el reglamento LATAM Pass, según se indica en www.latam.com."},
			{item:"<br/>"},
			{item:"<strong>Vuela Mejor:</strong>"},
			{item:"(3) Los clientes titulares de la Tarjeta de Crédito Platinum LATAM Pass de Banco Santander recibirán en total un máximo de 2 Cupones de Upgrade anuales. Los Cupones de Upgrade tienen una vigencia de 1 año, estarán vigentes hasta el 31 de marzo del año siguiente a aquel en que fueron entregados y se renovarán automáticamente siempre y cuando la Tarjeta se encuentre vigente y utilizable. Los cupones no son acumulables año a año."},
			{item:"(4) Acceso a salones Pacific Club es responsabilidad de Servicios Aeroportuarios S.A. y de Strategic Aviation Planning S.A. El acceso está limitado a la capacidad de los salones sin que corresponda a Banco Santander Chile intervención en ello. Términos y Condiciones del Reglamento LATAM Pass disponibles en https://www.latam.com/es_cl/latam-pass/. Estos beneficios se otorgan solamente al titular de la Tarjeta de Crédito Platinum Santander LATAM Pass y no son acumulables a aquellos entregados a los clientes con anterioridad, pudiendo obtener en su totalidad y como máximo solamente los beneficios antes mencionados."},
			{item:"<br/>"},
			{item:"<strong>Seguros y Servicios:</strong>"},
			{item:"*Suscrito por AIG LATIN AMERICA, I.I.; póliza 009-000787. Aplican restricciones y condiciones de póliza.** Servicio proporcionado por AXA Assistance USA. Aplican restricciones."},
			{item:"<br/>"},
			{item:"<strong>Tarifas:</strong>"},
			{item:"(1)Los porcentajes deben aplicar por el monto del avance o compra según corresponda.<br/>(2)Comisión aplica para tarjetas dentro de plan multiproducto contratado a partir del 03 de marzo de 2017."},
			{item:"<br/>"},
			{item:"<strong>Preguntas Frecuentes:</strong>"},
			{item:"(1) Se excluyen las siguientes operaciones con Tarjeta de Crédito LATAM Pass: compras de cargo inmediato (avances en efectivo, compras en casinos y juegos de azar), compra de combustibles, pago de impuestos en general (contribuciones, IVA, etc), notas de débito y/o crédito, así como cargos por intereses o cargos por parte del Banco (comisiones). Acumulación de kilómetros LATAM Pass en cada período mensual de facturación relacionados a compras y pagos efectuados en pesos o moneda extranjera con la Tarjeta de Crédito Santander LATAM Pass, opera hasta el monto del respectivo cupo nacional o internacional autorizado por el Banco para la tarjeta a la fecha del estado de cuenta.<br/>(2) Beneficio exclusivo para clientes de Tarjetas de Crédito LATAM Pass que posean la Tarjeta Redcompra Santander. Se bonifican las compras realizadas en establecimientos comerciales adheridos a Transbank S.A. Se excluyen compras de combustible, casinos, juegos de azar y pagos de impuesto en general, los que no generan kilómetros LATAM Pass. Se excluyentambién los giros en cajeros automáticos Redbanc. Los kilómetros acumulados se verán reflejados en la cuenta del titular LATAM Pass al mes siguiente o subsiguiente de realizadas las compras. Los beneficios del programa LATAM Pass son de exclusiva responsabilidad de LATAM AIRLINES GROUP S.A., no cabiéndole a Banco Santander Chile responsabilidad alguna en ello ni en la ulterior atención que ello demande.<br/>(3) En tarifas, rutas y fechas limitadas que permitan la acumulación de kilómetros LATAM Pass."}
		],
		tabs: [
			{
				name:"Beneficios Tarjetas",
				num_cols: "1",
				col1: [
					{tipo:"titulo", content: "Vuela más"},
					{tipo:"sub-titulo", content:"Beneficio de Acumulación de kilómetros (KMS.)"},
					{tipo:"lista", content:[
						{item:"<strong>1,5 KMS. LATAM Pass por dólar gastado</strong> en todas las compras en Chile y el extranjero realizadas con la tarjeta de crédito. (1)"},
						{item:"<strong>0,5 KMS. LATAM Pass por dólar gastado</strong> en compras realizadas con la Tarjeta de Débito (Redcompra) en Chile y en el extranjero. <sup>(1)</sup>"},
						{item:"<strong>Multiplica tus KMS LATAM Pass.</strong> Todas tus compras con Tarjetas de Crédito Santander LATAM Pass, en tiendas adheridas, multiplicarán los kms. que acumulas (2). Revisa las tiendas adheridas <a href='http://www.lan.com/multiplica' target='_blank'>aquí</a>"}
					]},
					{tipo:"titulo", content: "Vuela antes"},
					{tipo:"lista", content:[
						{item:"<strong>Acumulación de 25% de KMS.LATAM Pass adicionales al viajar.(2) </strong><br/>Sobre la distancia acumulada en vuelos al viajar en LATAM y American Airlines. Beneficio asociado a categoría Gold."}
					]},
					{tipo:"titulo", content: "Vuela mejor"},
					{tipo:"lista", content:[
						{item:"Acceso a Categoría Elite Programa de Pasajero Frecuente LATAM Pass. Al obtener Tarjeta de Crédito Platinum Santander LATAM Pass, automáticamente se es parte de la categoría Elite Gold del exclusivo programa de Pasajero frecuente de LATAM, LATAM Pass."}
					]},
					{tipo:"sub-titulo", content:"Beneficios y servicios asociados a su viaje"},
					{tipo:"lista", content:[
						{item:"<strong>2 Cupones de Upgrade LATAM Pass anuales.(3) </strong><br/>Un Upgrade permite acceder a la clase de servicio inmediatamente superior en vuelos vendidos y operados por LATAM. Es decir, si compró un pasaje en Clase Economy, le permite acceder a Clase Business. Los cupones Upgrade de su tarjeta Platinum Santander LATAM Pass no son acumulables con otras categorías Elite de LATAM Pass. <br/>Revisa más detalles de este beneficio <a target='_blank' href='https://www.latam.com/es_cl/latam-pass/upgrade-de-cabina/upgrade-de-cortesia/'>aquí</a>."},
						{item:"<strong>Check-ln preferente en Aeropuerto de Santiago Arturo Merino Benitez al viajar en LATAM, en rutas internacionales.</strong><br/>Exclusivo sólo para los titulares de la tarjeta Platinum .Podrá chequearse en los counters preferentes, en Aeropuerto de Santiago, Chile (Arturo Merino Benitez). Solo debe mostrar su Tarjeta de Crédito Platinum Santander LATAM Pass. Este beneficio se encuentra disponible solo para las rutas internacionales y es válido para vuelos en LATAM. Beneficio asociado a la categoría Gold."},
						{item:"<strong>Acceso a salones Pacific Club en Chile exclusivo para rutas internacionales <sup>(4)</sup></strong><br/>Exclusivo sólo para los titulares de la Tarjeta Platinum Santander LATAM Pass que estén volando en LATAM al momento de hacer uso del salón. Acceso gratuito con un acompañante. Acceso limitado según capacidad. Exclusivo para rutas internacionales."},
						{item:"<strong>Equipaje  adicional de hasta 23 kilos (sin costo) al volar en LATAM </strong><br/>En vuelos nacionales e internacionales, vendidos y operados por LATAM desde origen a destino final, el tarjetahabiente de Platinum Santander LATAM Pass cuenta siempre con el beneficio exclusivo de una pieza de equipaje de hasta 23 kg sin costo. Beneficio no acumulable con otros entregados en rutas específicas. Para acceder a este beneficio, debes presentar tu Tarjeta de Crédito Platinum Santander al agente de counter en el aeropuerto."}
					]},
					{tipo:"importante", content:[
						{item:"Beneficios del Programa Santander LATAM Pass se otorgan al titular de la tarjeta y no son acumulables por Tarjeta de Crédito contratada o con categorías Elite superiores del programa LATAM Pass."},
						{item:"Plazo de Activación de beneficios asociados a tu Tarjeta de Crédito (incluyendo categoría Gold LATAM Pass), quedarán activos en un plazo de 15 días hábiles contados desde la activación de dicha tarjeta."},
						{item:"Revisa detalles y condiciones de los beneficios en cada apartado de beneficios de vuela más, antes y mejor."},
						{item:"Todos los beneficios y categoría Gold LATAM Pass asociados a su tarjeta quedarán activos hasta 15 días hábiles después de activada la tarjeta. Para mantener la categoría usted debe utilizar su tarjeta de crédito al menos 6 de los 12 meses del año en curso. En caso que un año determinado pierda la categoría, podrá recuperarla para el año siguiente si durante ese año cumple la regla. Restitución de categoría, en caso que aplique, se realiza durante el mes de abril del año siguiente."}
					]}
				]
			},
			{
				name:"Seguros y Servicios",
				num_cols: "servicios",
				pdf:"../../pdf/guia_beneficios_platinum.pdf",
				col1:[
					{
						tabs:[
							{name:"MasterCard", content:[
								{name:"Servicios", content:[
									{item:"Priceless Cities y Beneficios Locales"},
									{item:"Travel Service Mastercard"},
									{item:"Concierge"}
								]},
								{name:"Seguros", content:[
									{item:"Master Rental (Contiene un valor máximo de beneficio de USD75.000 por daños para el Vehículo de Alquiler causados por colisión, robo y/o incendio accidental.)"},
									{item:"Master Assist Plus (En caso de tener una emergencia médica durante su viaje, Mastercard Platinum le brindará coordinación y asistencia para atender cualquier problema)."},
									{item:"Mastercard Global Service: <br/>1. Reporte de Tarjeta Perdida <br/>2. Reemplazo de Emergencia de la Tarjeta <br/>3. Adelanto de Efectivo de Emergencia"}
								]}
							]},
							{name:"Visa", content:[
								{name:"Servicios", content:[
									{item:"Asistencia previa al viaje"},
									{item:"Asistencia durante el viaje"},
									{item:"Asistencia con entrega de documentos valiosos"},
									{item:"Activación de los servicios Médicos Visa."}
								]},
								{name:"Seguros", content:[
									{item:"Seguro de alquiler de Autos"},
									{item:"Seguro de accidente en viajes (hasta USD 500.000)"}
								]}
							]},
							{name:"Amex", content:[
								{name:"Servicios",content:[
									{item:"Sin comisión en compras internacionales"},
									{item:"Servicio de Asistencia en Viajes"},
									{item:"Servicio Concierge"}
								]},
								{name:"Seguros",content:[
									{item:"Servicio de Asistencia en viajes**"},
									{item:"Seguro de alquiler de Autos* (USD 50.000)"},
									{item:"Seguro de accidente en viajes* (hasta USD 500.000)"},
									{item:"Seguro de protección de compras* (U$1.000 por evento/ US$5.000 por año)"}
								]}
							]}
						]
					}
				]
			},
			{
				name:"Tarifas",
				num_cols: "table",
				orientation:"horizontal",
				vigencia:"Tarifa válida contratos celebrados a partir del 3 de marzo 2017.",
				tarjetas:[
					{mastercard: true, head:"MASTERCARD"},
					{visa: true, head:"VISA"},
					{american: true, head:"AMEX"}
				],
				col1: [
					{item:"Servicio de compra en cuotas",mastercard:"$0",visa:"$0",american:"$0"},
					{item:"Servicio de aumento temporal de cupo por exceso",mastercard:"$0",visa:"$0",american:"$0"},
					{item:"Comisión de mantención mensual para Cliente con Plan Multiproducto que contemple la tarjeta en mención.",mastercard:"UF 0",visa:"UF 0",american:"UF 0"},
					{item:"Comisión de mantención mensual para Cliente sin Plan Multiproducto que contemple la tarjeta en mención.",mastercard:"UF 0,23 mensual",visa:"UF 0,23 mensual",american:"UF 0,23 mensual"},
					{item:"Descuento del 100% de manutención sobre cuota semestral, por consumo",mastercard:"No aplica",visa:"No aplica",american:"No aplica"},
					{item:"Modalidad de cobro",mastercard:"Vencido a todo evento",visa:"Vencido a todo evento",american:"Vencido a todo evento"},
					{item:"Servicio de avance en efectivo nacional (2)",mastercard:"UF 0,22",visa:"UF 0,22",american:"UF 0,22"},
					{item:"Servicio de avance EN CUOTAS nacional (2)",mastercard:"UF 0,22",visa:"UF 0,22",american:"UF 0,22"},
					{item:"Servicio de avance en el extranjero <sup>(1)</sup>",mastercard:"2,5% + US$ 2,5",visa:"2,5% + US$ 2,5",american:"2,5% + US$ 2,5"},
					{item:"Servicio de súperavance",mastercard:"$9.990",visa:"$9.990",american:"$9.990"},
					{item:"Servicio de compra internacional <sup>(1)</sup>",mastercard:"2,50%",visa:"0,0%",american:"2,50%"},
					{item:"Servicio de avance y compra de divisas",mastercard:"UF 0,18",visa:"UF 0,18",american:"UF 0,18"},
					{item:"Servicio de remisión de tarjeta post bloqueo",mastercard:"No aplica",visa:"No aplica",american:"No aplica"},
					{item:"Servicio express de reemisión de tarjeta post bloqueo",mastercard:"UF 0,5",visa:"UF 0,5",american:"UF 0,5"}
				]
			},
			{
				name:"Requisitos y Condiciones",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
							{item:"Nacionalidad Chilena o Extranjero con residencia definitiva en el país."},
							{item:"Edad mínima 21 años."},
							{item:"Ingresos mensuales líquidos superiores a $1.000.000."},
							{item:"Buenos antecedentes comerciales."},
							{item:"La aprobación está sujeta a la política comercial y de riesgo vigente."}
						] 
					},
					{tipo:"parrafo", content: "Para acceder y operar dentro de las Políticas de Crédito de Banco Santander , es necesario que los antecedentes del cliente sean confiables, tengan un adecuado respaldo a través de la documentación mínima exigida, sean verificables cuando corresponda y contengan toda la información completa. Por consiguiente, si estás interesado en adquirir un producto crediticio deberás contar entre otros con:"},
					{tipo:"lista", content: [
							{item:"Una fuente regular, estable de ingresos y/o patrimonio suficiente para el pago del crédito solicitado."},
							{item:"No presentar morosidades o protestos vigentes."},
							{item:"Correcto comportamiento de pago con sus distintos acreedores."},
							{item:"Cumplir con la política definida."}
						] 
					}
				]
			},
			{
				name:"Características Generales",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
							{item:"Tecnología CHIP: Le entrega mayor seguridad, minimizando fraudes y mal uso de sus tarjetas. Ahora, en lugar de deslizar su tarjeta para hacer una compra, deberá insertar la tarjeta en el terminal de venta (POS) mientras se realiza la transacción. Confirmarí su compra como siempre con su clave secreta PinPass, logrando mayor seguridad y tranquilidad en su compra."},
							{item:"Tecnología CONTACTLESS: Esta tecnología ofrece mayor rapidez en sus compras de bajo monto, ya que basta con acercar la tarjeta al lector sin hacer contacto, sin necesidad de entregar la tarjeta, deslizarla por una ranura, ni insertarla en el terminal de venta."},
							{item:"Se puede usar en más de 50.000 establecimientos comerciales a lo largo de Chile y en más de 12 millones en 87 países del mundo."},
							{item:"Recibirás mensualmente un Estado de Cuenta con el detalle de tus compras, pagos y premios ganados."},
							{item:"Planificación de compra con el sistema de cuotas fijas."},
							{item:"Hacer tus compras en 3 cuotas precio contado en los establecimientos adheridos."},
							{item:"Tarjetas adicionales sin costo."},
							{item:"Pago Automático de Cuentas (PAT): Permite cargar tus cuentas de servicios (agua, luz, gas, etc.) en forma automática y pagarlas en una sola fecha todos los meses."},
							{item:"Descuentos especiales en restaurantes y tiendas exclusivas <a href='https://mov.santander.cl/beneficios' target='_blank'>Ver Súper Descuentos</a>"}
						] 
					}
				]
			},
			{
				name:"Preguntas Frecuentes",
				num_cols: "acordeon",
				col1: [
					{
						title:"¿Qué es el programa LATAM PASS?", 
						content: [
							{tipo:"parrafo", content: "Programa de beneficios que acumula Kilómetros LATAM Pass en el programa Pasajero Frecuente LATAM Pass por las compras realizadas con la Tarjeta de Crédito en Chile y en el extranjero y con la Tarjeta Redcompra Santander. Los kilómetros acumulados pueden ser canjeados por pasajes aéreos en LATAM y en las líneas aéreas asociadas a la alianza Oneworld."}
						] 
					},
					{
						title:"¿Cómo se acumulan kilómetros?", 
						content: [
							{tipo:"sub-titulo", content: "Por utilización de Tarjetas de Crédito LATAM Pass y Tarjeta Redcompra Santander:"},
							{tipo:"lista", content:[
								{item:"1,5 KMS. LATAM Pass por cada dólar gastado en Chile o en el extranjero con la Tarjeta de Crédito LATAM Pass Santander<sup>(1)</sup>."},
								{item:"0,5 KMS. LATAM Pass por cada dólar gastado en Chile con la Tarjeta Redcompra Santander (2)."}
							]},
							{tipo:"sub-titulo", content:"Por vuelos:"},
							{tipo:"lista", content:[
								{item:"Tú acumulas kilómetros (3) cada vez que vuelas en LATAM, en las líneas aéreas integrantes de oneworld y en las líneas aéreas asociadas a LATAM Pass. Puedes canjear estos kilómetros por pasajes gratis a más de 570 destinos alrededor del mundo. Actualmente, las líneas aéreas integrantes de la alianza oneworld son: LATAM, American Airlines, British Airways, Cathay Pacific, Finnair, Iberia, JAL, Malev, Qantas y Royal Jordanian."}
							]}
						] 
					},
					{
						title:"¿Dónde consultar sus kilómetros?", 
						content: [
							{tipo:"lista", content: [
								{item:"En cualquier oficina LATAM, o en el teléfono 600-526-2000"},
								{item:"En www.latam.com, ingresando nombre de usuario y clave."},
								{item:"Adicionalmente, los kilómetros acumulados son informados mensualmente a través del Estado de Cuenta."}
							]}
						] 
					},
					{
						title:"¿Cual es la vigencia de los Kilómetros?", 
						content: [
							{tipo:"parrafo", content: "Los Kilómetros originados por compras de Tarjetas LATAM Pass tendrán vigencia hasta el 31 de diciembre del año subsiguiente a la fecha de su generación. En caso de acumular 12.000 kms. o más con el uso de sus Tarjetas Santander LATAM Pass entre Diciembre del año previo y Noviembre del año en que se verifica la definición , se renovará el saldo completo de sus kms por 36 meses."}
						] 
					},
					{
						title:"¿Cómo usar los Upgrade?", 
						content: [
							{tipo:"lista", content: [
								{item:"Viajar en un vuelo vendido y operado por LATAM."},
								{item:"Viajar con un pasaje pagado (se excluyen promociones de kilómetros + pesos y algunos programas turísticos)."},
								{item:"Que el precio pagado por ese pasaje cumpla con la tarifa mínima exigida para hacer efectivo el Upgrade. (Familias tarifarías Base Plus, Flexible y Full Flexible)."},
								{item:"Viajar con un pasaje canjeado con KMS LATAM Pass. (en este caso no es requisito acumular KMS LATAM Pass)"},
								{item:"Cumplir con la cantidad de cupones necesaria para ruta."},
								{item:"Que haya espacio disponible en la cabina a la que quiere hacer el Upgrade, en todos los tramos del vuelo para vuelos en tránsito."},
								{item:"La tarifa mínima que aplica para cada ruta, es la definida por el origen y destino final del pasajero que quiere hacer uso del beneficio."},
								{item:"Si los cupones van a ser usados por un acompañante, éste debe viajar en compañía del socio titular de los cupones."},
								{item:"Para utilizar sus cupones de Upgrade, deberá estar acumulando KMS. LATAM Pass en ese vuelo a excepción que esté viajando con un pasaje canjeado con kms."},
								{item:"El cupón es válido hasta la fecha indicada en el Estado de Cuenta de Upgrades."},
								{item:"LATAM se reserva el derecho de modificar las condiciones aplicables al beneficio de Upgrade."},
								{item:"La postulación al Upgrade de cabina debe realizarse a través de LATAM.com desde 48 hasta 2 hrs. Antes de la salida del vuelo"},
								{item:"La postulación de UPG no asegura el acceso a la cabina business, esto depende de los cupos disponibles en el avión, lo cual será confirmado en el Aeropuerto antes de abordar."}
							]}
						] 
					},
					{
						title:"¿Qué debo hacer para usar el Check In preferente?", 
						content: [
							{tipo:"parrafo", content: "Deberá presentar su tarjeta de socio elite (Premium, Premium Silver y Comodoro) entregada por LATAM y chequearse en los counters de clase Ejecutiva que tengan disponibilidad, aunque viaje en clase Turista. Este beneficio es válido sólo para vuelos internacionales, ya sea en LATAM o en las líneas aéreas de oneworld."}
						] 
					},
					{
						title:"Algunos vuelos LATAM son operados por otras Líneas Aéreas, ¿Los beneficios corren en estos casos?", 
						content: [
							{tipo:"parrafo", content: "No. Los beneficios aplican solamente para vuelos operados por LATAM."}
						] 
					},
					{
						title:"¿Si tengo 2 Tarjetas Platinum los beneficios se duplican?", 
						content: [
							{tipo:"parrafo", content: "No, los beneficios LATAM Pass no son acumulativos a los entregados por las categorías LATAM Pass previamente o a los otorgados con otras Tarjetas Santander LATAM Pass pudiendo obtener en su totalidad y como máximo solamente los beneficios antes descritos."}
						] 
					},
					{
						title:"¿Tengo acceso a boarding preferente?", 
						content: [
							{tipo:"parrafo", content: "No."}
						] 
					},
					{
						title:"Con respecto al equipaje adicional", 
						content: [
							{tipo:"sub-titulo", content: "¿Cuántos kilos puedo llevar por viaje?"},
							{tipo:"parrafo", content: "La cantidad de kilos normales permitidos por vuelo dependerá de la ruta volada y de la cabina. Más detalle en LATAM.com / Información para tu viaje / Equipaje en bodega. Al ser titular de la Tarjeta de Crédito Platinum Santander LATAM Pass, podrás transportar un equipaje adicional de hasta 23 kilos."},
							{tipo:"sub-titulo", content: "¿Este beneficio aplica a todas las tarifas de LATAM?"},
							{tipo:"parrafo", content: "Si, este beneficio es aplicable para la compra en cualquier tarifa o canje de pasajes en todas sus cabinas."},
							{tipo:"sub-titulo", content: "¿Cuáles son las tarifas de LATAM , que no incluye equipaje en la venta del pasaje?"},
							{tipo:"parrafo", content: "Las tarifas “Promo” y “Light” de LATAM son las únicas que no incluyen equipaje en el costo del pasaje , sin embargo , al ser titular de la Tarjeta de Crédito Platinum Santander LATAM Pass y haber comprado en estas tarifas podrás transportar un equipaje de hasta 23 kilos."},
							{tipo:"sub-titulo", content:"¿Puedo usar el beneficio de equipaje adicional en todos los vuelos Operados por LATAM?"},
							{tipo:"parrafo", content:"Si, en vuelos operados y embarcados en LATAM desde origen a destino final. Este beneficio no es acumulable con el entregado por la categoría de socio LATAM Pass, por lo tanto como máximo el pasajero tendrá derecho a 1 equipaje adicional de hasta 23 kilos en vuelos LATAM, independiente de su categoría elite."},
							{tipo:"sub-titulo", content:"¿Mis acompañantes también tienen este beneficio?"},
							{tipo:"parrafo", content:"No. Este beneficio es sólo para el titular de la Tarjeta de Crédito Platinum Santander LATAM Pass."},
							{tipo:"sub-titulo", content:"¿Si mi adicional viaja sólo también tiene acceso a este beneficio?"},
							{tipo:"parrafo", content:"No."},
							{tipo:"sub-titulo", content:"¿Cuántos kilos permite este equipaje adicional?"},
							{tipo:"parrafo", content:"Hasta 23 kilos."},
							{tipo:"sub-titulo", content:"¿Si obtengo Upgrade, tengo posibilidad también de otro equipaje adicional?"},
							{tipo:"parrafo", content:"No."},
							{tipo:"sub-titulo", content:"¿Beneficio de equipaje adicional es sólo cuando compro el pasaje con la tarjeta?"},
							{tipo:"parrafo", content:"No, el beneficio se realiza al presentar la Tarjeta de Crédito Platinum Santander LATAM Pass en el momento del Check-in, independiente si el pasaje fue comprado o canjeado."},
							{tipo:"sub-titulo",content:"¿Tengo que mostrar la tarjeta para obtener el beneficio o estoy inscrito con mi RUT?"},
							{tipo:"parrafo",content:"Tienes que mostrar la tarjeta al momento del Check-in."},
							{tipo:"sub-titulo",content:"¿Tengo beneficio de equipaje adicional si viajo en otra aerolínea?"},
							{tipo:"parrafo",content:"No, este beneficio aplica solamente para vuelos OPERADOS por LATAM."}
						] 
					},
					{
						title:"¿Dónde encuentro el código de autorización de las Tarjetas American Express?", 
						content: [
							{tipo:"parrafo", content: "A diferencia del resto de las marcas, las Tarjetas de Crédito American Express tienen el código de autorización en la parte frontal de la tarjeta. A modo de ejemplo, pueden revisar esta imagen."},
							{tipo:"parrafo", content: "<br/><br/>"},
							{tipo:"imagen", content: "tarjetas/img/img-tarjetas/lanpass_platinium_american_express.jpg"}
						] 
					}
				]
			}
		]
	},
	// GOLD SANTANDER LATAM PASS
	{
		url:"goldsantanderlanpass",
		name:"Gold Santander LATAM PASS",
		range: 1,
		min_renta:"400.000",
		max_renta:"699.999",
		featured: true,
		tipoTarjeta:"lanpass",
		clasificacion:"viajes",
		idForm: "3",
		onbording: true,
		title:"VUELA MÁS, ANTES Y MEJOR",
		bajada:"Tu Tarjeta de Crédito Gold Santander LATAM Pass, le entrega los mejores beneficios y servicios para hacer de tu viaje en LATAM una experiencia única.",
		imagen: "img/img-tarjetas/santander-gold-lanpass.png",
		link:"tarjetas/goldsantanderlanpass/index.asp",
		ver_mas:[
			{item:"Acumula 1,5 kms. por cada dólar gastado en compras en Chile y el Extranjero con tu Tarjeta de Crédito."},
			{item:"Acumula 0,5 kms. por cada dólar gastado en compras en Chile y el Extranjero con tu tarjeta de débito."}
		],
		legales:[
				{item:"<strong>Frase Legal:</strong>"},
				{item:"La acumulación de KMS.LATAM Pass en cada período mensual de facturación opera hasta el monto del respectivo cupo nacional e internacional autorizado por el Banco para cada tarjeta. Esto aplica para todas las compras y pagos realizados en pesos y/o moneda extranjera en cada periodo. Los abonos que se efectúen durante el período mensual de facturación, aunque confieran nuevas disponibilidades sobre los cupos autorizados, no habilitan la acumulación de mayor número de KMS.LATAM Pass."},
				{item:"<br/>"},
				{item:"<strong>Vigencia de los kilómetros:</strong>"},
				{item:"Los KMS. LATAM Pass acumulados tienen vigencia hasta el 31 de diciembre del año subsiguiente al que fueron acreditados. Si entre Enero y Noviembre del año en curso acumula una cantidad igual o superior a 12.000 KMS. LATAM Pass con el uso de su Tarjeta de Crédito Platinum Santander LATAM Pass, renovará su saldo completo."},
				{item:"Los beneficios no financieros del Programa Santander LATAM Pass rigen hasta el 31 de Diciembre de 2017."},
				{item:"(1) Programa LATAM Pass y todos los beneficios LATAM Pass asociados a la tarjeta son de exclusiva responsabilidad de LATAM AIRLINES GROUP S.A., no cabiéndole a Banco Santander Chile responsabilidad alguna en ello ni en la ulterior atención que ello demande. Se excluyen las siguientes operaciones con Tarjeta de Crédito y/o Redcompra Santander LATAM Pass: compras de cargo inmediato (avances en efectivo, compras en casinos y juegos de azar), compra de combustibles, pago de impuestos en general, notas de débito y/o crédito, así como cargo por intereses o cargos por parte del Banco (comisiones). Acumulación de kilómetros LATAM Pass en cada período mensual de facturación relacionados a compras y pagos efectuados en pesos o moneda extranjera con la Tarjeta de Crédito Santander LATAM Pass, opera hasta el monto del respectivo cupo nacional o internacional autorizado por el Banco para la tarjeta a la fecha del estado de cuenta. Programa LATAM Pass y todos los beneficios LATAM Pass asociados a la tarjeta son de exclusiva responsabilidad de LATAM AIRLINES GROUP S.A., no cabiéndole a Banco Santander Chile responsabilidad alguna en ello ni en la ulterior atención que ello demande"},
				{item:"(2) Conozca los términos y condiciones de Multiplica, comercios adheridos, beneficio y vigencia de la adhesión de cada comercio en www.lan.com/multiplica. El Programa LATAM Pass, Multiplica y el abono y canje de Kilómetros LATAM Pass son responsabilidad de LATAM AIRLINES GROUP S.A., sin que corresponda a Banco Santander Chile intervención en ello. Revise términos y condiciones aquí."},
				{item:"<br/>"},
				{item:"<strong>Seguros y Servicios:</strong>"},
				{item:"*Suscrito por AIG LATIN AMERICA, I.I.; póliza 009-000787. Aplican restricciones y condiciones de póliza.** Servicio proporcionado por AXA Assistance USA. Aplican restricciones."},
				{item:"<br/>"},
				{item:"<strong>Tarifas:</strong>"},	
				{item:"<strong>(1)Los porcentajes deben aplicar por el monto del avance o compra según corresponda.<br/>(2)Comisión aplica a cada transacción de avance en efectivo en Chile. Tarifa válida a partir de 01 de diciembre de 2013 hasta 31 de diciembre de 2017. A partir de esta última fecha, aplica la tarifa precisada en el contrato del cliente."},
				{item:"<br/>"},
				{item:"<strong>Preguntas Frecuentes:</strong>"},
				{item:"(1) Se excluyen las siguientes operaciones con Tarjeta de Crédito LATAM Pass: compras de cargo inmediato (avances en efectivo, compras en casinos y juegos de azar), compra de combustibles, pago de impuestos en general (contribuciones, IVA, etc), notas de débito y/o crédito, así como cargos por intereses o cargos por parte del Banco (comisiones). Acumulación de kilómetros LATAM Pass en cada período mensual de facturación relacionados a compras y pagos efectuados en pesos o moneda extranjera con la Tarjeta de Crédito Santander LATAM Pass, opera hasta el monto del respectivo cupo nacional o internacional autorizado por el Banco para la tarjeta a la fecha del estado de cuenta.<br/>(2) Beneficio exclusivo para clientes de Tarjetas de Crédito LATAM Pass que posean la Tarjeta Redcompra Santander. Se bonifican las compras realizadas en establecimientos comerciales adheridos a Transbank S.A. Se excluyen compras de combustible, casinos, juegos de azar y pagos de impuesto en general, los que no generan kilómetros LATAM Pass. Se excluyentambién los giros en cajeros automáticos Redbanc. Los kilómetros acumulados se verán reflejados en la cuenta del titular LATAM Pass al mes siguiente o subsiguiente de realizadas las compras. Los beneficios del programa LATAM Pass son de exclusiva responsabilidad de LATAM AIRLINES GROUP S.A., no cabiéndole a Banco Santander Chile responsabilidad alguna en ello ni en la ulterior atención que ello demande.<br/>(3) En tarifas, rutas y fechas limitadas que permitan la acumulación de kilómetros LATAM Pass."},
				],		
		tabs: [
			{
				name:"Beneficios Tarjetas",
				num_cols: "1",
				col1: [
					{tipo:"sub-titulo",content:"Beneficio de Acumulación de kilómetros"},
					{tipo:"lista",content:[
						{item: "<strong>1,5 KMS. LATAM Pass por dólar gastado</strong> en todas las compras en Chile y el extranjero realizadas con la tarjeta de crédito .<sup>(1)</sup>" },
						{item: "<strong>0,5 KMS. LATAM Pass por dólar gastado</strong> en compras realizadas con la Tarjeta de Débito (Redcompra) en Chile y en el extranjero. <sup>(1)</sup>"},
						{item: "<strong>Multiplica tus KMS LATAM PASS</strong> Todas tus compras con Tarjetas de Crédito Santander LATAM Pass, en tiendas adheridas, multiplicarán los kms. que acumulas <sup>(2)</sup>. Revisa las tiendas adheridas <a target='_blank' href='https://ssl.lan.com/multiplica/'>aquí</a>"}
					]}
				]
			},
			{
				name:"Seguros y Servicios",
				num_cols: "servicios",
				pdf:"../../pdf/guia_beneficios_gold.pdf",
				col1:[
					{
						tabs:[
							{name:"MasterCard", content:[
								{name:"Servicios", content:[
									{item:"Mastercard Specials, acceso a descuentos y beneficios exclusivos."},
									{item:"Alerta de Gastos."}
								]},
								{name:"Seguros", content:[
									{item:"Garantía extendida (El monto del beneficio máximo es de hasta USD 200 por incidente, sujeto a un máximo de USD 400 por Cuenta por un periodo de doce (12) meses)."},
									{item:"Protección de Compras (El monto del beneficio máximo es de hasta USD200 por incidente, sujeto a un máximo de USD400 por Cuenta por un periodo de doce (12) meses)."},
									{item:"Master Card Global Service: <br/>1. Reporte de Tarjeta Perdida <br/>2. Reemplazo de Emergencia de la Tarjeta <br/>3. Adelanto de Efectivo de Emergencia"}
								]}
							]},
							{name:"Visa", content:[
								{name:"Servicios", content:[
									{item:"Asistencia previa al viaje"},
									{item:"Asistencia durante el viaje"},
									{item:"Asistencia con entrega de documentos valiosos"},
									{item:"Activación de los servicios Médicos Visa."}
								]},
								{name:"Seguros", content:[
									{item:"Seguro de arriendo de autos (hasta USD 250.000)"}
								]}
							]},
							{name:"American Express", content:[
								{name:"Servicios",content:[
									{item:"Asistencia en viajes"}
								]},
								{name:"Seguros",content:[
									{item:"Asistencia en Viajes**"},
									{item:"Seguro de alquiler de Autos* (USD 50.000"},
									{item:"Seguro de protección de compras* (USD 1.000 por evento/ USD 5.000 por año)"},
									{item:"Seguro de accidente en viajes* (hasta USD 250.000)"}
								]}
							]}
						]
					}
				]
			},
			{
				name:"Tarifas",
				num_cols: "table",
				orientation:"horizontal",
				vigencia:"Tarifa válida contratos celebrados a partir del 3 de marzo 2017.",
				tarjetas:[
					{mastercard: true, head:"MASTERCARD"},
					{visa: true, head:"VISA"},
					{american: true, head:"AMERICAN EXPRESS"}
				],
				col1: [
					{item:"Servicio de compra en cuotas",mastercard:"$0",visa:"$0",american:"$0"},
					{item:"Servicio de aumento temporal de cupo por exceso",mastercard:"$0",visa:"$0",american:"$0"},
					{item:"Comisión de mantención mensual para Cliente con Plan Multiproducto que contemple la tarjeta en mención.",mastercard:"UF 0",visa:"UF 0",american:"UF 0"},
					{item:"Comisión de mantención mensual para Cliente sin Plan Multiproducto que contemple la tarjeta en mención.",mastercard:"UF 0,18 mensual",visa:"UF 0,18 mensual",american:"UF 0,18 mensual"},
					{item:"Descuento del 100% de manutención sobre cuota semestral, por consumo",mastercard:"No aplica",visa:"No aplica",american:"No aplica"},
					{item:"Modalidad de cobro",mastercard:"Vencido a todo evento",visa:"Vencido a todo evento",american:"Vencido a todo evento"},
					{item:"Servicio de avance en efectivo nacional (2)",mastercard:"UF 0,22",visa:"UF 0,22",american:"UF 0,22"},
					{item:"Servicio de avance EN CUOTAS nacional (2)",mastercard:"UF 0,22",visa:"UF 0,22",american:"UF 0,22"},
					{item:"Servicio de avance en el extranjero <sup>(1)</sup>",mastercard:"US$ 12",visa:"US$ 12",american:"US$ 12"},
					{item:"Servicio de súperavance",mastercard:"$12.990",visa:"$12.990",american:"$12.990"},
					{item:"Servicio de compra internacional <sup>(1)</sup>",mastercard:"3,50%",visa:"3,50%",american:"3,50%"},
					{item:"Servicio de avance y compra de divisas",mastercard:"UF 0,18",visa:"UF 0,18",american:"UF 0,18"},
					{item:"Servicio de remisión de tarjeta post bloqueo",mastercard:"No aplica",visa:"No aplica",american:"No aplica"},
					{item:"Servicio express de reemisión de tarjeta post bloqueo",mastercard:"UF 0,5",visa:"UF 0,5",american:"UF 0,5"}
				]
			},
			{
				name:"Requisitos y Condiciones",
				num_cols: "2",
				col1: [
					{tipo:"lista", content: [
							{item:"Nacionalidad Chilena o Extranjero con residencia definitiva en el país."},
							{item:"Edad mínima 21 años."},
							{item:"Ingresos mensuales líquidos superiores a $400.000."},
							{item:"Buenos antecedentes comerciales."},
							{item:"La aprobación está sujeta a la política comercial y de riesgo vigente."}
						] 
					},
				],
				col2: [
					{tipo:"parrafo", content: "Para acceder y operar dentro de las Políticas de Crédito de Banco Santander , es necesario que los antecedentes del cliente sean confiables, tengan un adecuado respaldo a través de la documentación mínima exigida, sean verificables cuando corresponda y contengan toda la información completa. Por consiguiente, si estás interesado en adquirir un producto crediticio deberás contar entre otros con:"},
					{tipo:"lista", content:[
							{item:"Una fuente regular, estable de ingresos y/o patrimonio suficiente para el pago del crédito solicitado."},
							{item:"No presentar morosidades o protestos vigentes."},
							{item:"Correcto comportamiento de pago con sus distintos acreedores."},
							{item:"Cumplir con la política definida."}
						] 
					}
				]
			},
			{
				name:"Características Generales",
				num_cols: "2",
				col1: [
					{tipo:"lista", content: [
							{item:"Tecnología CHIP: Le entrega mayor seguridad, minimizando fraudes y mal uso de sus tarjetas. Ahora, en lugar de deslizar su tarjeta para hacer una compra, deberá insertar la tarjeta en el terminal de venta (POS) mientras se realiza la transacción. Confirmarí su compra como siempre con su clave secreta PinPass, logrando mayor seguridad y tranquilidad en su compra."},
							{item:"Tecnología CONTACTLESS: Esta tecnología ofrece mayor rapidez en sus compras de bajo monto, ya que basta con acercar la tarjeta al lector sin hacer contacto, sin necesidad de entregar la tarjeta, deslizarla por una ranura, ni insertarla en el terminal de venta."},
							{item:"Solo las tarjetas MASTERCARD y VISA tienen disponible la tecnología Chip y Contactless."},
							{item:"Se puede comprar en miles de establecimiento comerciales lo largo de Chile y en el mundo."},
						] 
					}
				],
				col2: [
					{tipo:"lista", content:[
							{item:"Recibirás mensualmente un Estado de Cuenta con el detalle de tus compras, pagos y premios ganados."},
							{item:"Planificación de compra con el sistema de cuotas fijas."},
							{item:"Hacer tus compras en 3 cuotas precio contado en los establecimientos adheridos."},
							{item:"Tarjetas adicionales sin costo."},
							{item:"Pago Automático de Cuentas (PAT): Permite cargar tus cuentas de servicios (agua, luz, gas, etc.) en forma automática y pagarlas en una sola fecha todos los meses."},
							{item:"Descuentos especiales en restaurantes y tiendas exclusivas Ver Súper Descuentos"}
						] 
					}
				]
			},
			{
				name:"Preguntas Frecuentes",
				num_cols: "acordeon",
				col1: [
					{
						title:"¿Qué es el programa LATAM PASS?", 
						content: [
							{tipo:"parrafo", content: "Programa de beneficios que acumula Kilómetros LATAM Pass en el programa Pasajero Frecuente LATAM Pass por las compras realizadas con la Tarjeta de Crédito en Chile y en el extranjero y con la Tarjeta Redcompra Santander. Los kilómetros acumulados pueden ser canjeados por pasajes aéreos en LATAM y en las líneas aéreas asociadas a la alianza Oneworld."}
						] 
					},
					{
						title:"¿Cómo se acumulan kilómetros?", 
						content: [
							{tipo:"sub-titulo", content: "Por utilización de Tarjetas de Crédito LANPASS y Tarjeta Redcompra Santander:"},
							{tipo:"lista", content: [
									{item:"1,5 KMS. LATAM Pass por cada dólar gastado en Chile o en el extranjero con la Tarjeta de Crédito LATAM Pass Santander(1)."},
									{item:"0,5 KMS. LATAM Pass por cada dólar gastado en Chile con la Tarjeta Redcompra Santander (2)."},
									{item:"Tú acumulas kilómetros (3) cada vez que vuelas en LATAM, en las líneas aéreas integrantes de oneworld y en las líneas aéreas asociadas a LATAM Pass. Puedes canjear estos kilómetros por pasajes gratis a más de 570 destinos alrededor del mundo. Actualmente, las líneas aéreas integrantes de la alianza oneworld son: LATAM, American Airlines, British Airways, Cathay Pacific, Finnair, Iberia, JAL, Malev, Qantas y Royal Jordanian."}
								]
							}
						] 
					},
					{
						title:"¿Dónde consultar sus kilómetros?", 
						content: [
							{tipo:"lista", content: [
									{item:"En cualquier oficina LATAM, o en el teléfono 600-526-2000"},
									{item:"En www.latam.com, ingresando nombre de usuario y clave."},
									{item:"Adicionalmente, los kilómetros acumulados son informados mensualmente a través del Estado de Cuenta."}
								]
							}
						] 
					},
					{
						title:"¿Cual es la vigencia de los kilómetros?", 
						content: [
							{tipo:"parrafo", content: "Los Kilómetros originados por compras de Tarjetas LATAM Pass tendrán vigencia hasta el 31 de diciembre del año subsiguiente a la fecha de su generación. En caso de acumular 12.000 kms. o más con el uso de sus Tarjetas Santander LATAM Pass entre Diciembre del año previo y Noviembre del año en que se verifica la definición , se renovará el saldo completo de sus kms por 36 meses."}
						] 
					}
					
				]
			}
		]
	},
	// SUPERPUNTOS
	{
		url:"superpuntos",
		name:"SUPERPUNTOS",
		range: 1,
		featured: true,
		min_renta:"400.000",
		max_renta:"4.300.000",
		tipoTarjeta:"superpuntos",
		clasificacion:"entretencion",
		idForm: "10",
		onbording: true,
		title:"",
		bajada:"Programa de beneficios que acumula SUPERPUNTOS por las compras realizadas con las Tarjeta de Crédito SUPERPUNTOS.",
		imagen: "img/img-tarjetas/santander-super-puntos.png",
		link:"tarjetas/superpuntos/index.asp",
		ver_mas:[
			{item:"Acumula 1 SUPERPUNTO por cada $100 de compras nacionales con tu Tarjeta de Crédito, y 5 SUPERPUNTOS por cada dólar gastado en compras internacionales con tu Tarjeta de Crédito."},
			{item:"¡Accede a un renovado catálogo de productos, experiencias, gift card, cupones y muchas novedades más!"}
		],
		legales:[
			{item:"Beneficios del Nuevo Programa SUPERPUNTOS válidos hasta el 31 Diciembre 2017. (A) Beneficios a contratante persona natural de la tarjeta de crédito Santander. Participan en el Nuevo Programa SUPERPUNTOS las tarjetas de crédito emitidas por Banco Santander Chile, que no presenten bloqueo y que no se encuentren acogidas a otro sistema de puntajes, de beneficios o de afinidad implementado por el Banco. En consecuencia, a modo ejemplar, quedan excluidas Tarjetas de Crédito acogidas al Programa Turismo Cocha, Club de Lectores El Mercurio, Movistar, Programa LATAM Pass y Tarjeta 3.2.1. Quedan excluidas también las tarjetas de crédito emitidas por Banefe (Santander Banefe), división de créditos de consumo de Banco Santander Chile y la tarjeta de crédito MasterCard Universal Santander. No aplica a tarjetas de empresas. No aplica a tarjetas de débito. - ACUMULACIóN: (a) 1 SUPERPUNTOS por cada $100 de compras nacionales con Tarjeta de Crédito participante. (b) 5 SUPERPUNTOS por cada US$1 de compras internacionales con Tarjeta de Crédito participante.- No acumulan compras de cargo inmediato (avances en efectivo, compras en casinos y juegos de azar), compra de combustibles, pago de impuestos en general (Contribuciones, IVA, etc. entre otros), notas de débito y/o crédito, así como cargos por intereses u otros cargos por parte del Banco (comisiones). (B) Beneficios a clientes del plan de productos financieros “Plan SUPERPUNTOS”: Tales clientes acumularán 50 SUPERPUNTOS por cada una de las siguientes transacciones, con tope de 100 transacciones al mes: Giros, Súper Giros y recargas de celulares con tarjeta debito en Cajeros Santander y Banefe, Transferencias emitidas y recibidas por internet www.santander.cl (rut distinto al titular), Pagos Automáticos en Cuenta Corriente y Tarjetas de Crédito. (PAT / PAC) suscritos y efectivamente cargados, Pagos electrónicos de cuentas con cargo a cuenta corriente (en www.santander.cl.) (C) Responsabilidades: El nuevo programa  SUPERPUNTOS, la acumulación y canje de SUPERPUNTOS y sus condiciones y términos y la oferta, venta y entrega de productos del catálogo son de exclusiva responsabilidad de EVERIS CHILE S.A. no cabiéndole a Banco Santander Chile responsabilidad alguna en ello ni en la ulterior atención que ello demande. Reglamento SUPERPUNTOS está protocolizado en Notaría de Santiago de doña Nancy de La Fuente."},
			{item:"<br/>"},
			{item:"<strong>Tarifas:</strong>"},	
			{item:"(1)Los porcentajes deben aplicar por el monto del avance o compra según corresponda."},
			{item:"(2)Comisión aplica a cada transacción de avance en efectivo en Chile. Tarifa válida a partir de 01 de Diciembre de 2013, hasta 30 de junio de 2017. A partir de esta última fecha, aplica la tarifa precisada en el contrato del cliente."}
		],
		tabs: [
			{
				name:"Beneficios Tarjetas",
				num_cols: "1",
				col1: [
					{tipo:"parrafo",content:"¡Conoce los beneficios que te ofrece el programa SUPERPUNTOS!"},
					{tipo:"lista",content:[
						{item:"Acceso a experiencias gourmet, SPA, turismo, entretención, entre otras."},
						{item:"Canje de GiftCard."},
						{item:"Descuentos en tus compras."},
						{item:"Canje a través de SUPERPUNTOS, SUPERPUNTOS + Pesos o compra en Pesos."},
						{item:"Transferencia gratuita de SUPERPUNTOS a terceros."},
						{item:"Despachos de productos gratis."},
						{item:"Vigencia de los SUPERPUNTOS de 24 meses."},
						{item:"Conoce el nuevo reglamento <a target='_blank' href='../../pdf/reglamento-superpuntos-2016.pdf'>aquí</a>"}
					]}
				]
			},
			{
				name:"Seguros y Servicios",
				num_cols: "1",
				col1:[
					{tipo:"sub-titulo",content:"<div class='text-center'>Obtén más información sobre nuestros seguros y servicios de tu Tarjeta aquí</div>"},
					{tipo:"parrafo", content:"<div class='col-md-4'><a class='btnSize btnWhite text-center' href='/tarjetas/nuestras-tarjetas/pdf/beneficios-mastercard-superpuntos.pdf' target='_blank'>MasterCard</a></div> <div class='col-md-4'><a class='btnSize btnWhite text-center' style='width:100%;' href='/tarjetas/nuestras-tarjetas/pdf/beneficios-visa-superpuntos.pdf' target='_blank'>VISA</a></div> <div class='col-md-4'><a class='btnSize btnWhite text-center' href='/tarjetas/nuestras-tarjetas/pdf/beneficios-amex-superpuntos.pdf' target='_blank'>AmericanExpress</a></div>"}
				],
			},
			{
				name:"Tarifas",
				num_cols: "table",
				orientation:"horizontal",
				vigencia:"Tarifa válida contratos celebrados a partir del 3 de marzo 2017.",
				tarjetas:[
					{mastercard: true, head:"MASTERCARD "},
					{visa: true, head:"VISA"},
					{american: true, head:"AMEX"}
				],
				col1: [
					{item:"Servicio de compra en cuotas",mastercard:"$0",visa:"$0",american:"$0"},
					{item:"Servicio de aumento temporal de cupo por exceso",mastercard:"$0",visa:"$0",american:"$0"},
					{item:"Comisión de mantención mensual para Cliente con Plan Multiproducto que contemple la tarjeta en mención.",mastercard:"UF 0",visa:"UF 0",american:"UF 0"},
					{item:"Comisión de mantención mensual para Cliente sin Plan Multiproducto que contemple la tarjeta en mención.",mastercard:"UF 0,14 mensual",visa:"UF 0,14 mensual",american:"UF 0,14 mensual"},
					{item:"Descuento del 100% de manutención sobre cuota semestral, por consumo",mastercard:"No aplica",visa:"No aplica",american:"No aplica"},
					{item:"Modalidad de cobro",mastercard:"Vencido a todo evento",visa:"Vencido a todo evento",american:"Vencido a todo evento"},
					{item:"Servicio de avance en efectivo nacional (2)",mastercard:"UF 0,22",visa:"UF 0,22",american:"UF 0,22"},
					{item:"Servicio de avance EN CUOTAS nacional (2)",mastercard:"UF 0,22",visa:"UF 0,22",american:"UF 0,22"},
					{item:"Servicio de avance en el extranjero (1)",mastercard:"US$ 12",visa:"US$ 12",american:"US$ 12"},
					{item:"Servicio de súperavance",mastercard:"$12.990",visa:"$12.990",american:"$12.990"},
					{item:"Servicio de compra internacional (1)",mastercard:"3,50%",visa:"3,50%",american:"3,50%"},
					{item:"Servicio de avance y compra de divisas",mastercard:"UF 0,18",visa:"UF 0,18",american:"UF 0,18"},
					{item:"Servicio de remisión de tarjeta post bloqueo",mastercard:"No aplica",visa:"No aplica",american:"No aplica"},
					{item:"Servicio express de reemisión de tarjeta post bloqueo",mastercard:"UF 0,5",visa:"UF 0,5",american:"UF 0,5"}
				]
			},
			{
				name:"Requisitos y Condiciones",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
							{item:"Nacionalidad Chilena o Extranjero con residencia definitiva en el país."},
							{item:"Edad: mínima 21 años."},
							{item:"Ingresos mensuales líquidos superiores a $400.000."},
							{item:"Una fuente regular y estable de ingresos y/o patrimonio suficiente para el pago del crédito solicitado."},
							{item:"Buenos antecedentes comerciales, considerando el comportamiento de pago con sus distintos acreedores."},
							{item:"Para acceder y operar dentro de las Políticas de Crédito de Banco Santander , es necesario que los antecedentes del cliente sean confiables, tengan un adecuado respaldo a través de la documentación mínima exigida, sean verificables cuando corresponda y contengan toda la información completa."},
							{item:"La aprobación finalmente está sujeta a la política comercial y de riesgo vigente."}
						] 
					},
					{tipo:"sub-titulo",content:"<strong>Criterios mínimos para acceder a un producto:</strong>"},
					{tipo:"parrafo", content: "Para acceder y operar dentro de las Políticas de Crédito de Banco Santander , es necesario que los antecedentes del cliente sean confiables, tengan un adecuado respaldo a través de la documentación mínima exigida, sean verificables cuando corresponda y contengan toda la información completa. Por consiguiente, si estás interesado en adquirir un producto crediticio deberás contar entre otros con:"}
				]	
			},
			{
				name:"Características Generales",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
							{item:"Tecnología CHIP y CONTACTLESS"},
							{item:"Se puede usar en más de 50.000 establecimientos comerciales a lo largo de Chile y en más de 12 millones en 87 países del mundo."},
							{item:"Recibirás mensualmente un Estado de Cuenta con el detalle de tus compras, pagos y premios ganados."},
							{item:"Planificación de compra con el sistema de cuotas fijas."},
							{item:"Hacer tus compras en 3 cuotas precio contado en los establecimientos adheridos."},
							{item:"Tarjetas adicionales sin costo."},
							{item:"Permite hacer avances en dinero en efectivo o cuotas en cajeros automáticos e Internet."},
							{item:"Pago Automático de Cuentas (PAT): Permite cargar tus cuentas de servicios (agua, luz, gas, etc.) en forma automática y pagarlas en una sola fecha todos los meses."},
							{item:"Tarjetas MasterCard, Visa y American Express."}
						] 
					},
					{tipo:"imagen", content:"assets/img/superpuntos.jpg"}
				]
			},
			{
				name:"Preguntas Frecuentes",
				num_cols: "acordeon",
				col1: [
					{
						title:"¿Qué es SUPERPUNTOS?", 
						content: [
							{tipo:"parrafo", content: "SUPERPUNTOS es un Programa de Fidelización de Banco Santander Chile, de acumulación de puntos (denominados SUPERPUNTOS). Está dirigido exclusivamente a Clientes personas naturales titulares de Tarjetas de Crédito SUPERPUNTOS del Banco Santander Chile."}
						] 
					},
					{
						title:"¿Cómo puedo ser parte del programa SUPERPUNTOS?", 
						content: [
							{tipo:"parrafo", content: "Para acceder a los beneficios del programa SUPERPUNTOS debes tener activa una Tarjeta de Crédito SUPERPUNTOS. Si aún no la tienes, pídela llamando a VOX al (600) 320 3000 o directamente con tu ejecutivo de cuentas de Banco Santander Chile. Si aún no eres cliente acércate a cualquier sucursal."}
						] 
					},
					{
						title:"¿Qué tarjetas participan de SUPERPUNTOS?", 
						content: [
							{tipo:"parrafo", content: "Participarán en el programa SUPERPUNTOS las Tarjetas de Crédito emitidas por Banco Santander Chile, que no presenten ningún tipo de bloqueo y que no se encuentren acogidas a otro sistema de puntos o beneficios implementado por el mismo Banco. En consecuencia, quedan excluidas Tarjetas de Crédito acogidas al Programa Cocha, Club de Lectores El Mercurio, Programa LANPASS y Tarjeta 3.2.1. Desde el 16 de Enero de 2017, clientes del ex Programa Movistar pasaron a ser parte del Programa SUPERPUNTOS. Quedan excluidas también de este programa SUPERPUNTOS las Tarjetas de Crédito emitidas por Banefe (Santander Banefe), división de Créditos de Consumo de Banco Santander Chile y la Tarjeta de Crédito MasterCard Universal Santander. No aplica a tarjetas emitidas a personas jurídicas. No aplica a Tarjetas de Débito."}
						] 
					},
					{
						title:"¿Cuánto me demoro en estar activo en el programa?", 
						content: [
							{tipo:"parrafo", content: "El tiempo estimado de activación en Programa SUPERPUNTOS es de 48 horas hábiles para clientes nuevos, contadas desde el momento de contratación de la Tarjeta de Crédito SUPERPUNTOS de Banco Santander Chile."}
						] 
					},
					{
						title:"¿Puedo tener inscrita más de una cuenta?", 
						content: [
							{tipo:"parrafo", content: "No se puede tener inscrita más de una cuenta, ya que cada cuenta esta individualizada a través del RUT del titular correspondiente; sin embargo, sí se puede tener inscritas múltiples tarjetas asociadas a una misma cuenta."}
						] 
					},
					{
						title:"¿Cuál es la vigencia del programa?", 
						content: [
							{tipo:"parrafo", content: "El programa SUPERPUNTOS tiene una duración indefinida, no obstante Banco Santander Chile podrá poner término a este programa, sin expresión de causa, previo aviso con 30 días de anticipación."}
						] 
					},
					{
						title:"¿Existe algún cobro asociado a la tarjeta SUPERPUNTOS?", 
						content: [
							{tipo:"parrafo", content: "Para consultar cobros asociados dirigirse a pestañas Tarifas."}
						] 
					},
					{
						title:"¿Cómo acumulo SUPERPUNTOS?", 
						content: [
							{tipo:"parrafo", content: "Acumularán puntos tus compras nacionales (*) e internacionales realizadas con tu Tarjeta de Crédito SUPERPUNTOS (Titular y/o adicional). <br/> *Se excluyen compras de cargo inmediato como Avances en efectivo y/o cuotas, compras en Casinos, Juegos de azar, Combustibles, pagos de impuestos, notas de débito y/o crédito, así como cargos por intereses u otros cargos por parte del Banco (comisiones)."}
						] 
					},
					{
						title:"¿Cuántos SUPERPUNTOS acumulo en mis compras con la tarjeta de crédito SUPERPUNTOS?", 
						content: [
							{tipo:"parrafo", content: "Por cada $100 en compras nacionales acumulas 1 SUPERPUNTO. Por cada USD$1 en compras internacionales acumulas 5 SUPERPUNTOS."}
						] 
					},
					{
						title:"¿Quiénes acumulan puntos?", 
						content: [
							{tipo:"parrafo", content: "únicamente personas naturales podrán acumular SUPERPUNTOS. Personas Jurídicas no acumulan SUPERPUNTOS."}
						] 
					},
					{
						title:"¿Todas las tarjetas acumulan lo mismo?", 
						content: [
							{tipo:"parrafo", content: "Todas las tarjetas asociadas a Programa SUPERPUNTOS tienen la misma acumulación de puntos."}
						] 
					},
					{
						title:"¿Cómo accedo a mi historial de acumulación?", 
						content: [
							{tipo:"parrafo", content: "Podrás encontrar o solicitar información respecto a tu acumulación de SUPERPUNTOS mediante:"},
							{tipo:"",content:[
								{item:"www.santander.cl con tu rut y clave de internet, seleccionando botón SUPERPUNTOS y luego, “ir a catálogo”. En catálogo, dirigirse a “Menú” y seleccionar “PUNTOS”."}
							]}
						] 
					},
					{
						title:"¿Qué compras no acumulan puntos?", 
						content: [
							{tipo:"parrafo", content: "No acumulan puntos las compras de cargo inmediato (avances en efectivo, compras en casinos y juegos de azar), compra de combustibles, pago de impuestos en general (Contribuciones, IVA, entre otros), notas de débito y/o crédito, así como cargos por intereses u otros cargos por parte del Banco (comisiones)."}
						] 
					},
					{
						title:"¿Cuál es la vigencia de los puntos acumulados?", 
						content: [
							{tipo:"parrafo", content: "Los puntos tendrán una vigencia de 24 meses, contados desde el mes en que se bonifican en la cuenta del Titular. Transcurrido este plazo, los puntos que no hubiesen sido utilizados expirarán. <br/>Si el banco decidiese poner término al programa, el cliente podrá canjear hasta 30 días posteriores a la fecha de término. Posterior a esta fecha los puntos no canjeados expirarán."}
						] 
					},
					{
						title:"¿Cuantos días después de la transacción se bonifican los SUPERPUNTOS en mi cuenta?", 
						content: [
							{tipo:"parrafo", content: "Los SUPERPUNTOS serán bonificados en un plazo máximo de 72 horas luego de que la transacción haya sido aprobada."}
						] 
					},
					{
						title:"¿Puedo perder mis puntos acumulados?", 
						content: [
							{tipo:"parrafo", content: "Será motivo de pérdida de los puntos las siguientes causales:"},
							{tipo:"lista", content:[
								{item:"Cierre de las tarjetas por parte del titular, o desahucio del contrato de emisión de Tarjeta de Crédito por parte del Banco o Titular."},
								{item:"Mora superior a 90 días en sus pagos, en cualquiera de las tarjetas que tuviera. Una vez que esté al día en sus pagos, volverá a acumular puntos desde cero (0)."},
								{item:"Cierre de la tarjeta por fallecimiento del titular."},
								{item:"Renuncia voluntaria."},
								{item:"Cualquier otra circunstancia que origine la suspensión o término del uso de la tarjeta de acuerdo a lo establecido en el respectivo contrato."},
								{item:"Caducidad de los puntos por haber transcurrido el plazo de 24 meses sin que ellos hayan sido utilizados, según se ha expresado en los párrafos precedentes."}
							]},
							{tipo:"parrafo", content:"Por otra parte, al incurrir en morosidad en el pago del estado de cuenta de tu Tarjeta de Crédito, no podrás realizar canjes en tanto la mora perdure y las compras que pudiera efectuar en dicho período no generarán puntos para el programa."}
						] 
					},
					{
						title:"¿Como canjeo mis SUPERPUNTOS?", 
						content: [
							{tipo:"lista", content: [
								{item:"A través de la página web www.santander.cl con tu rut y clave de internet, seleccionando botón SUPERPUNTOS y luego, “ir a catálogo”."}
							]},
							{tipo:"parrafo", content: "<strong>Si no tienes SUPERPUNTOS suficientes, no te desanimes, los canjes pueden ser con solo PUNTOS, PUNTOS + Pesos o solo Pesos con tu Tarjeta de Crédito SUPERPUNTOS.</strong>"}
						] 
					},
					{
						title:"Si realizo abono a mis compras, ¿Cuando se refleja este abono?", 
						content: [
							{tipo:"parrafo", content: "Si el pago lo realizas antes de tu fecha de facturación, el abono quedará reflejado el día hábil subsiguiente de realizada la transacción. <br/> Si lo realizas posterior a la fecha de facturación y previo a tu fecha de vencimiento, el abono quedará reflejado en la fecha de vencimiento. <br/> Si con los puntos acumulados deseas abonar al pago mínimo de tu estado de cuenta, este pago debes realizarlo al menos con dos días de anticipación a la Fecha de Vencimiento, de lo contrario, tu Tarjeta de Crédito quedará en Mora."}
						] 
					},
					{
						title:"¿Cuál es mínimo de puntos para canjear?", 
						content: [
							{tipo:"parrafo", content: "Dado que el catálogo es, en esencia, variable en términos de productos contenidos en él, el mínimo de puntos a canjear estará definido por la oferta de productos y por el stock de productos disponibles. Lo anterior no impide que puedas utilizar la modalidad de canje “Puntos + Pesos” o “Sólo Pesos” para acceder a los productos que desees si no tienes el saldo suficiente de Puntos."}
						] 
					},
					{
						title:"¿Cómo activo una experiencia?", 
						content: [
							{tipo:"parrafo", content: "Una vez realizado el canje en la plataforma dirígete a www.bigbox.cl , sección “Activa tu Bigbox” y luego ingresa el código entregado en el minuto del canje. Una vez ingresado el código podrás elegir la experiencia que más te guste dentro de la categoría seleccionada."},
							{tipo:"parrafo", content:"Finalmente, llama al comercio donde canjeaste la experiencia (este número se encuentra en la descripción de cada experiencia) para agendar una hora de atención y disfrutar de tu experiencia."}
						] 
					},
					{
						title:"¿Un adicional puede canjear?", 
						content: [
							{tipo:"parrafo", content: "Solo los titulares de las Tarjetas de Crédito, vigentes y activas, cuyos pagos se encuentren al día, podrán realizar un canje."}
						] 
					},
					{
						title:"¿Cuándo canjeo puntos, también acumulo?", 
						content: [
							{tipo:"parrafo", content: "El canje de puntos no constituye un motivo de acumulación de puntos, sólo las compras efectuadas con la Tarjeta Santander SUPERPUNTOS; esto incluye las compras en pesos efectuadas en el catálogo del mismo nombre."}
						] 
					},
					{
						title:"¿Cuánto es el monto máximo a transferir por transferencia?", 
						content: [
							{tipo:"parrafo", content: "El monto máximo que se podrá transferir a otra persona en una transferencia será de 20.000 puntos."}
						] 
					},
					{
						title:"¿Cuál es el monto máximo mensual a transferir?", 
						content: [
							{tipo:"parrafo", content: "El monto máximo que se podrá transferir en un mes será de 50.000 puntos."}
						] 
					},
					{
						title:"Cuando canjeo un producto, ¿cuánto demora el despacho de este?", 
						content: [
							{tipo:"parrafo", content: "El tiempo de despacho máximo es de 10 días hábiles contados desde que la compra haya sido autorizada y aprobada."}
						] 
					},
					{
						title:"¿Cuál es el monto máximo mensual a transferir?", 
						content: [
							{tipo:"parrafo", content: "Solo podrá recibir el producto una persona mayor de 18 años, quien deberá identificarse con su cedula de identidad."}
						] 
					},
					{
						title:"Si no recibo el producto en ese plazo ¿qué debo hacer?", 
						content: [
							{tipo:"parrafo", content: "En el caso de no recibir el producto en el plazo antes señalado debes llamar a VOX al (600) 320 3000 para poder hacer seguimiento a tu caso."}
						] 
					},
					{
						title:"¿Cuál es el valor de despacho de los productos canjeados?", 
						content: [
							{tipo:"parrafo", content: "Uno de los beneficios del Programa SUPERPUNTOS es el despacho de productos gratis. Sólo se incurrirá en un cobro extra en las siguientes situaciones:"},
							{tipo:"lista", content:[
								{item:"En los casos en que no fuese posible entregar el producto habiéndose realizado 3 visitas al domicilio indicado al momento del canje."},
								{item:"Dirección de entrega se encuentra fuera del radio de cobertura."}
							]}						] 
					},
					{
						title:"¿Cuál es el radio de cobertura de despacho de los productos?", 
						content: [
							{tipo:"parrafo", content: "Para obtener información del radio de cobertura de despacho de productos debes llamar a VOX al (600) 320 3000."}
						] 
					},
					{
						title:"¿Qué garantías aplican a los productos canjeados?", 
						content: [
							{tipo:"parrafo", content: "La Garantía de los productos canjeados está sujeta a las normas legales vigentes."}
						] 
					},
					{
						title:"¿Puedo devolver un producto?", 
						content: [
							{tipo:"parrafo", content: "Los productos pueden ser devueltos sólo en los casos en que no se registren fallas o daños imputables a cliente. El producto deberá ser entregado en perfectas condiciones, en su embalaje y cajas originales, incluyendo todos sus accesorios y folletos (de lo contrario no podrá realizarse la devolución). Para iniciar el proceso de devolución el cliente debe comunicarse con VOX al número (600) 320 3000."}
						] 
					},
					{
						title:"¿Qué pasa con los puntos y/o pesos asociados a un canje restituido?", 
						content: [
							{tipo:"parrafo", content: "Los Puntos y/o pesos utilizados en el canje serán abonados al titular de la Tarjeta de Crédito SUPERPUNTOS."}
						] 
					},
					{
						title:"¿Cómo resuelvo dudas o soluciono problemas de mi cuenta?", 
						content: [
							{tipo:"parrafo", content: "Si tienes alguna duda sobre la utilización de la página, el canje de productos o si necesitas solucionar un problema de cuenta, debes llamar a VOX al (600) 320 3000."}
						] 
					},
					{
						title:"¿Qué hago si no recuerdo mi clave del sitio?", 
						content: [
							{tipo:"parrafo", content: "Si no recuerdas tu clave, deberás ingresar a www.santander.cl y seleccionar el link “¿No tienes tu clave?” que aparece en el cuadro de inicio de sesión.<br/>También puedes obtener tu clave de acceso llamando a VOX al (600) 320 3000, teniendo a mano tu Tarjeta de Débito."}
						] 
					},
					{
						title:"¿Cuántos SUPERPUNTOS acumulo con el plan SUPERPUNTOS?", 
						content: [
							{tipo:"parrafo", content: "Si tienes el Plan SUPERPUNTOS, acumulas 50 SUPERPUNTOS por cada una de las siguientes transacciones:"},
							{tipo:"lista", content: [
								{item:"Giro, SuperGiro y Recargas en cajeros automáticos pertenecientes a la red Santander – Banefe."},
								{item:"Transferencia de fondos emitidas o recibidas desde o hacia cuenta corriente asociada al Plan SUPERPUNTOS, realizadas a través de la APP o página web www.santander.cl, excluyéndose aquellas transacciones bajo el mismo rut titular."},
								{item:"Pagos Automáticos PAC (Pago Automático de Cuenta Corriente) y PAT (Pagos automáticos en Tarjetas de Crédito). Se excluyen los PAC/PAT de productos internos del Banco."},
								{item:"Pagos en línea en santander.cl"}
							]},
							{tipo:"parrafo", content: "Acumulación del Plan SUPERPUNTOS es de máximo 5.000 SUPERPUNTOS al mes. <br/>Acumulación por uso de Tarjeta de Crédito es ilimitada."}
						] 
					},
					{
						title:"¿Puedo contratar tarjetas latam pass por fuera del plan SUPERPUNTOS?", 
						content: [
							{tipo:"parrafo", content: "Si, las Tarjetas LATAM PASS pueden ser contratadas por fuera del Plan SUPERPUNTOS, pero deberás pagar todas las comisiones mensuales y semestrales de cada una de las Tarjetas de Crédito LATAM PASS a contratar de manera adicional al cobro que se realice por el Plan SUPERPUNTOS."}
						] 
					},
					{
						title:"¿Si me cambio al plan SUPERPUNTOS, automáticamente todas las tarjetas quedan asociadas, estando o no en mi plan anterior?", 
						content: [
							{tipo:"parrafo", content: "Si, todas las Tarjetas de Crédito distintas a Club de Lectores, WorldMember Ferrari, Universal y las pertenecientes al Programa LATAM Pass, quedan asociadas al Plan SUPERPUNTOS sin cobros de mantención. El único requisito, es que al menos una de las Tarjetas de Crédito debe ser SUPERPUNTOS."}
						] 
					},
					{
						title:"¿Las transferencias a terceros y giros en cajeros automáticos santander – banefe, tienen un monto mínimo para acumular SUPERPUNTOS?", 
						content: [
							{tipo:"parrafo", content: "No existe un monto mínimo definido. Si se concreta la operación, se acumulan 50 SUPERPUNTOS por dicha transferencia o giro."}
						] 
					}
				]
			}
		]
	},
	// CLUB DE LECTORES
    {
		url:"clubdelectores",
		name:"Club de Lectores American Express",
		range: 1,
		min_renta:"400.000",
		max_renta:"699.999",
		featured: false,
		tipoTarjeta:"clublectores",
		clasificacion:"descuentos",
		idForm: "",
		onbording: false,
		title:"",
		bajada:"Acceso a todos los descuentos del Club de Lectores de El Mercurio, publicados en la Revista del Club de Lectores.",
		imagen: "img/img-tarjetas/american-express.png",
		link:"tarjetas/clubdelectores/index.asp",
		ver_mas:[
			{item:"10% de descuento adicional en todos los productos que se venden en las Casas Club."},
			{item:"30% de descuento en todos los Restaurantes del Club de Lectores."}
		],
		legales:[	
			{item:"<strong>Casas Club:</strong> El descuento adicional se realizará sobre el monto pagado con dicha tarjeta y tiene un tope de $20.000 al mes por cliente titular, para compras realizadas en Casas Club. El descuento se realizará en el estado de cuenta subsiguiente, y es de exclusiva responsabilidad de MV S.A., no cabiéndole a Banco Santander Chile intervención alguna en su entrega o en la ulterior atención que ello demande.<br/>Restaurantes: Los descuentos, entrega de beneficios como así mismo la garantía de servicio y calidad del producto serán de exclusiva responsabilidad de cada uno de los restaurantes adheridos a la promoción, no cabiéndole intervención ni responsabilidad alguna a la empresa El Mercurio S. A. P. como tampoco a Banco Santander Chile.<br/><strong>Ventas Especiales:</strong> El 10% de descuento adicional se realizará sobre el monto pagado con dicha tarjeta en las casas club y en las ventas especiales. Con un tope de $20.000 por cliente titular. El descuento se realizará en el estado de cuenta subsiguiente, y es de exclusiva responsabilidad de MV S. A., no cabiéndole a Banco Santander Chile ni al Club de Lectores de El Mercurio S.A.P. intervención alguna en su entrega o en la ulterior atención que ello demande.<br/><strong>Teatros:</strong> Los descuentos y/o regalos indicados se realizarán sobre el monto pagado con dicha tarjeta y es otorgado por ENGRANAJE MEDIOS S.A. /CENTRO DE EXTENSIÓN ARTíSTICA Y CULTURAL DE LA UNIVERSIDAD DE CHILE, CEAC. / CAVAS REUNIDAS S.A./FUNDACIÓN TEATRO MUNICIPAL DE LAS CONDES. /INGENIO PUBLICIDAD S.A./ IMPORT. Y EXPORT.COMERCIAL JLM SPA. /PABLO DEMARIA Y CIA LTDA. / CORPORACION CULTURAL DE LA ILUSTRE MUNUCIPALIDAD DE SANTIAGO. /COMERCIAL BRUMA LTDA. /MULTIMUSICA S.A. /SKI LA PARVA S.A./TRUKO LTDA. /PRODUCTORA DE ESPECTACULOS CULTURALES Y TEATRALES TRANQUILA LTDA. / CUATRO BARBAS LTDA. / COMERCIAL ESTRELLA DE AFRICA LTDA. / DEPORTES NAUTICOS, TURISMO, VENTA DE ART.DEPORTIVOS./MANUEL ANTONIO CERDA FERNANDEZ./ EDUARDO DIB H. Y CIA.LTDA./RUBEN CAMPOS./ WAVE HOUSE S.A./ OCEANO ARTE & CULTURA E.I./ PIBAMOUR LTDA./ESTRELLA DE AFRICA LTDA. /GOURMET MARKET SPA/ASESORíAS E INVERSIONES SANTA VICTORIA LTDA., según corresponda, sin que corresponda a Banco Santander Chile ni al Club de Lectores de El Mercurio S.A.P. intervención alguna en ello ni en la ulterior atención que ello demande. Descuento válido en los puntos de venta indicados y se realiza al momento de la compra."},
			{item:"<br/>"},
			{item:"<strong>Tarifas:</strong>"},
			{item:"Tarifa válida contratos celebrados a partir del 3 de marzo 2017.<br/>Estas tarifas no aplican a contratos celebrados con anterioridad a dicha fecha.<br/>(1)Los porcentajes deben aplicar por el monto del avance o compra según corresponda.<br/>(2) Comisión aplica a cada transacción de avance en efectivo en Chile. Tarifa válida a partir de 01 de Diciembre de 2013, hasta 30 de junio de 2017. A partir de esta última fecha, aplica la tarifa precisada en el contrato del cliente.<br/>El Banco se reserva el derecho a modificarlas, conforme a las normas impartidas por la Superintendencia de Bancos.<br/>El cliente, en caso de no estar conforme con las comisiones informadas podra poner término a su contrato.Este tarifado no aplica a Tarjetas Santander Banefe."},
			
		],
		tabs: [
			{
				name:"Beneficios Tarjetas",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
						{item:"Acceso a todos los descuentos del Club de Lectores de El Mercurio, publicados en la Revista del Club de Lectores."},
						{item:"10% de descuento adicional en todos los productos que se venden en las Casas Club."},
						{item:"30% de descuento todos los días en restaurantes adheridos a la promoción."},
						{item:"10% de descuento adicional en las Ventas Especiales del Club de Lectores señaladas, con tope de $20.000, para cada venta."}
					]},
					{tipo:"sub-titulo",content:"Descuentos todo el año en:"},
					{tipo:"lista", content:[
						{item:"Teatro Municipal de Santiago"},
						{item:"Teatro Municipal de las Condes"},
						{item:"Teatro Universidad de Chile"},
						{item:"Teatro NESCAFÉ de las Artes"}
					]},
					{tipo:"parrafo", content:"Conoce los beneficios del programa Selects que te otorga tu Tarjeta Club de Lectores American Express. <a target='_blank' href='http://offers.amexnetwork.com/ilp?campaignID=Cam-0000517'> Ver más</a>"}
				]
			},
			{
				name:"Seguros y Servicios",
				num_cols: "servicios",
				pdf:"https://www.clubdelectores.cl",
				col1:[
					{
						tabs:[
							{name:"American Express", content:[
								{name:"Seguros", content:[
									{item:"Seguro de Accidente en Viajes"},
									{item:"Protección de Compras"},
									{item:"Seguro de Alquiler de Autos"},
									{item:"Ver seguros American Express Club de Lectores. <a target='_blank' href='/tarjetas/personas/nuestras-tarjetas/clubdelectores/guia_de_beneficios-club-de-lectores-american-express.pdf'> Descargar</a>"}
								]},
								{name:"Servicios", content:[
									{item:"Servicio de Asistencia en Viajes"}
								]}
							]}
						]
					}
				]
			},
			{
				name:"Tarifas",
				num_cols: "table",
				orientation:"horizontal",
				vigencia:"Tarifa válida contratos celebrados a partir del 3 de marzo 2017.",
				tarjetas:[
					{mastercard: true, head:"AMERICAN EXPRESS CLUB DE LECTORES"},
					{visa: false, head:""},
					{american: false, head:""}
				],
				col1: [
					{item:"Administración",mastercard:"$0",visa:"$0",american:"$0"},
					{item:"Comisión de Mantención SUSCRIPTORES",mastercard:"UF 0,044 mensual",visa:"UF 0,044 mensual",american:"UF 0,044 mensual"},
					{item:"Comisión de Mantención NO SUSCRIPTORES",mastercard:"UF 0,14 mensual",visa:"UF 0,14 mensual",american:"UF 0,14 mensual"},
					{item:"Servicio de avance en efectivo nacional (2)",mastercard:"UF 0,20",visa:"UF 0,20",american:"UF 0,20"},
					{item:"Servicio de avance EN CUOTAS nacional (2)",mastercard:"UF 0,20",visa:"UF 0,20",american:"UF 0,20"},
					{item:"Servicio de avance en el extranjero (1)",mastercard:"2,5% + US$ 2,5",visa:"2,5% + US$ 2,5",american:"2,5% + US$ 2,5"},
					{item:"Servicio de súperavance",mastercard:"$9.990",visa:"$9.990",american:"$9.990"},
					{item:"Servicio de compra en cuotas",mastercard:"$0",visa:"$0",american:"$0"},
					{item:"Servicio de compra internacional (1)",mastercard:"0%",visa:"0%",american:"0%"},
					{item:"Servicio de avance y compra de divisas",mastercard:"UF 0,18",visa:"UF 0,18",american:"UF 0,18"},
					{item:"Servicio de aumento temporal de cupo",mastercard:"$0",visa:"$0",american:"$0"},
					{item:"Servicio de Reemisión de tarjeta post bloqueo",mastercard:"$1.990",visa:"$1.990",american:"$1.990"},
					{item:"Servicio express de remisión de tarjeta post bloqueo",mastercard:"UF 0,5",visa:"UF 0,5",american:"UF 0,5"},
					{item:"Sin comisión de mantención semestral, mientras sea socio vigente del Club de Lectores",mastercard:"UF 1.5",visa:"UF 1.5",american:"UF 1.5"}
				]
			},
			{
				name:"Requisitos y Condiciones",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
							{item:"Ser suscriptor del Mercurio"}
						] 
					}
				]
			},
			{
				name:"Características Generales",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
							{item:"Sin comisión de mantención semestral (1.5 UF), mientras sea socio vigente del Club de Lectores."},
							{item:"Tecnología CHIP: Te entrega mayor seguridad, minimizando fraudes y mal uso de tus tarjetas. Ahora, en lugar de deslizar tu tarjeta para hacer una compra, deberás insertar la tarjeta en el terminal de venta (POS) mientras se realiza la transacción. Confirmarás tu compra como siempre con tu clave secreta PinPass, logrando mayor seguridad y tranquilidad en tu compra."},
							{item:"Tecnología CONTACTLESS: Esta tecnología ofrece mayor rapidez en tus compras de bajo monto, ya que basta con acercar la tarjeta al lector sin hacer contacto, sin necesidad de entregar la tarjeta, deslizarla por una ranura, ni insertarla en el terminal de venta. Se puede usar en más de 50.000 establecimientos comerciales a lo largo de Chile y en más de 12 millones en 87 países del mundo."},
							{item:"Hacer tus compras en 3 cuotas precio contado en los establecimientos adheridos. Sin comisión en compras en el extranjero. Las compras por internet en comercios internacionales tampoco tienen comisión."}
						] 
					},
					{tipo:"parrafo", content:"Conoce los beneficios del programa Selects que te otorga tu Tarjeta Club de Lectores American Express. <a target='_blank' href='http://offers.amexnetwork.com/ilp?campaignID=Cam-0000517'> Ver más</a>"},
					{tipo:"sub-titulo", content:"PAGA TU TARJETA A TRAVÉS DE UNA TRANSFERENCIA ELECTRÓNICA"},
					{tipo:"parrafo", content:"Siguiendo estos pasos:"},
					{tipo:"imagen", content:"tarjetas/clubdelectores/clublectores.jpg"}
				]
			},
			{
				name:"Preguntas Frecuentes",
				num_cols: "acordeon",
				col1: [
					{
						title:"¿Cómo funciona el 10% adicional de descuento en casas club?", 
						content: [
							{tipo:"parrafo", content: "El descuento adicional se realizará sobre el monto pagado con tarjeta American Express Club de Lectores y tiene un tope de $20.000 al mes por cliente titular, para compras realizadas en Casas Club. El descuento se realizará en el estado de cuenta subsiguiente, y es de exclusiva responsabilidad de MV S.A., no cabiéndole a Banco Santander Chile intervención alguna en su entrega o en la ulterior atención que ello demande."}
						] 
					},	
					{
						title:"¿Cómo funciona el 10% adicional de descuento en ventas especiales?", 
						content: [
							{tipo:"parrafo", content: "El 10% de descuento adicional se realizará sobre el monto pagado con tarjeta American Express Club de Lectores en las ventas especiales. Con un tope de $20.000 por cliente titular. El descuento se realizará en el estado de cuenta subsiguiente, y es de exclusiva responsabilidad de MV S. A., no cabiéndole a Banco Santander Chile ni al Club de Lectores de El Mercurio S.A.P. intervención alguna en su entrega o en la ulterior atención que ello demande."}
						] 
					},	
					{
						title:"¿Cómo solicitarla?", 
						content: [
							{tipo:"parrafo", content: "Solicítela a través de Club de Lectores en <a href='http://www.clubdelectores.cl' target='_blank'>www.clubdelectores.cl</a> o llamando al 242 11 11."}
						] 
					}	
				]
			}
		]
	},
	// SANTANDER 321
	{
		url:"santander321",
		name:"Santander 3.2.1.",
		range: 1,
		min_renta:"0",
		tipoTarjeta:"321",
		clasificacion:"descuentos",
		idForm: "",
		onbording: false,
		title:"Es la primera Tarjeta Bancaria Cashback en Chile.",
		bajada:"La Tarjeta de Crédito Santander 3.2.1. posee como principal característica, la devolución de un porcentaje definido en las compras realizadas con la tarjeta en los siguientes rubros: Combustibles, Grandes Tiendas y Supermercados.",
		imagen: "/img/img-tarjetas/santander-321.png",
		link:"tarjetas/santander321/index.asp",
		ver_mas:[
			{item:"La primera Tarjeta que te devuelve plata."},
			{item:"Devuelve el 3% de tus compras en combustibles, 2% Grandes Tiendas y 1% Supermercados."}
		],
		legales:[
			{item:"<strong>Beneficios:</strong"},
			{item:"Beneficios descritos son válidos hasta 31 de Diciembre de 2017 y se otorgan hasta esa fecha, a la persona natural contratante de Tarjeta de Crédito MasterCard 3.2.1. emitida por Banco Santander Chile, en adelante Tarjeta Santander 3.2.1. No aplica a personas jurídicas. No aplica a otras tarjetas de crédito distintas de la precisada. Descuentos aplican por utilización de la Tarjeta Santander 3.2.1. en compras nacionales efectuadas exclusivamente en establecimientos de comercio de los siguientes rubros, según clasificación de Transbank S.A.: a) Supermercados, b) Grandes Tiendas y c) Combustible. No aplica a compras en establecimientos de otros rubros. No aplica a compras internacionales. Descuentos particulares por cada uno de los rubros ya señalados y los límites máximo en cada caso, para compras con Tarjeta Santander 3.2.1, son: a) Compras en Supermercados, aplica 1% de descuento sobre compras del mes, con un tope máximo mensual de descuento de $4.000.; b) Compras en Grandes Tiendas, aplica 2% de descuento sobre compras del mes, con un tope máximo mensual de descuento de $8.000.; c) Compras en Combustible, aplica 3% de descuento sobre compras del mes, con un tope máximo mensual de descuento de $3.000. Todos los topes máximos aplican por RUT del contratante de la tarjeta; no por tarjetas emitidas. Descuentos se abonarán en estado de cuenta de la tarjeta correspondiente a la compra que da derecho al mismo; no en puntos de venta. Descuentos ofrecidos son de responsabilidad exclusiva de MV S.A. sin que corresponda a Banco Santander Chile intervención alguna en ello ni en la ulterior atención que ello demande. La Tarjeta Santander 3.2.1. otorga sólo los beneficios de descuento arriba expresados. Emisión y activación de la tarjeta Santander 3.2.1. está sujeta a evaluación y aprobación comercial de los antecedentes del cliente y acreditación de renta mínima mensual de $400.000 del solicitante al Banco, que se reserva el derecho a rechazar la contratación. La oferta de contratación de esta tarjeta está disponible hasta el 31 de Diciembre de 2017 o hasta agotar stock de 20.000 contratos. Banco Santander Chile. Infórmese de las características de la Tarjeta Santander 3.2.1., sus comisiones asociadas y condiciones de contratación en www.santander.cl. Banco Santander Chile. Infórmese sobre la garantía estatal de los depósitos en su banco o en www.sbif.cl"},
			{item:"<br/>"},
			{item:"<strong>Tarifas:</strong"},
			{item:"(1) Los porcentajes deben aplicar por el monto del avance o compra según corresponda.<br/>(2) Comisión aplica a cada transacción de avance en efectivo en Chile. Tarifa válida a partir de 01 de diciembre de 2013 hasta 31 de diciembre de 2017. A partir de esta última fecha, aplica la tarifa precisada en el contrato del cliente.El Banco se reserva el derecho a modificarlas, conforme a las normas impartidas por la Superintendencia de Bancos.El cliente, en caso de no estar conforme con las comisiones informadas podrá poner término a su contrato. Este tarifado no aplica a Tarjetas Santander Banefe."}
		],
		tabs: [
			{
				name:"Beneficios Tarjetas",
				num_cols: "1",
				col1: [
					{tipo:"parrafo", content:"Es la primera Tarjeta Bancaria Cashback en Chile. La Tarjeta de Crédito Santander 3.2.1. posee como principal característica, la devolución de un porcentaje definido en las compras realizadas con la tarjeta en los siguientes rubros:"},
					{tipo:"lista", content:[
						{item:"Devuelve el 3% en las compras en Combustible (hasta $3.000 todos los meses)"},
						{item:"Devuelve el 2% en las compras en Grandes Tiendas (hasta $8.000 todos los meses)"},
						{item:"Devuelve el 1% en las compras en Supermercados (hasta $4.000 todos los meses)"}
					]},
					{tipo:"parrafo", content:"En total, devuelve hasta $15.000 todos los meses y hasta $180.000 al año."},
					{tipo:"parrafo", content:"<strong><a href='/tarjetas/nuestras-tarjetas/tarjetas/santander321/calculadora/index.asp'>Calculadora 3.2.1.</a></strong> Compara cuanto te devuelve tu tarjeta en un año aqui"},
					{tipo:"parrafo", content:"Sin acumular ni canjear puntos."},
					{tipo:"parrafo", content:"Y los más importante, la devolución se realiza por compras en cualquier Supermercado, en cualquier Gran Tienda y en cualquier Estación de Servicios, haciendo transversal el beneficio y no acotándolo a comercios particulares."}
				]
			},
						{
				name:"Seguros y Servicios",
				num_cols: "servicios",
				pdf:"../../pdf/Guia_Beneficios_Mastercard_Standard.pdf",
				col1:[
					{
						tabs:[
							{name:"MasterCard", content:[
								{name:"Seguros de Accidentes en Viajes ", content:[
									{item:"Con una cobertura de USD 75.000"},
									{item:"Posee una protección contra muerte accidental, desmembramiento o parálisis al viajar por tierra, aire o agua en un transporte comercial común."},
									{item:"Aplica siempre que el boleto fuese comprado con su Tarjeta de Crédito MasterCard."},
								]},
								{name:"Protección de Compras", content:[
									{item:"El beneficio Protección de Compras aplica exclusivamente para compras realizadas en el país de residencia. Con su Tarjeta de Crédito usted puede comprar confiado, sabiendo que la mayoría de las compras que usted haga con su tarjeta pueden estar protegidas en caso de hurto o daño accidental, durante los primeros 45 días posteriores a la fecha de compra (indicada en el recibo de la tienda). Cobertura: Los montos máximos de beneficio son de US$200 por incidente, sujeto a un total de US$400, por un período de doce meses.<br/>(*) Una Compra con cobertura debe tener un período mínimo de Garantía de tres meses, sin exceder un período máximo de garantía de tres años."},
									{item:"Para detalles sobre limitaciones, exclusiones, información detallada e iniciar proceso de reclamos por servicios o seguros MasterCard, debe llamar a:<br/>1-800-307-7309 sin cobro en USA o Canadá. <br/>1-636-722-7111 cobro revertido."}
								]}
							]}
						]
					}
				]
			},
			{
				name:"Tarifas",
				num_cols: "table",
				orientation:"horizontal",
				vigencia:"Tarifa válida contratos celebrados a partir del 3 de marzo 2017.",
				tarjetas:[
					{mastercard: true, head:" MASTERCARD SANTANDER 321"},
					{visa: false, head:""},
					{american: false, head:""}
				],
				col1: [
					{item:"Comisión de Apertura de Tarjeta de Crédito",mastercard:"UF 0"},
					{item:"Servicio de avance en efectivo nacional (2)",mastercard:"UF 0,22"},
					{item:"Servicio de avance EN CUOTAS nacional (2)",mastercard:"UF 0,22"},
					{item:"Servicio de súperavance",mastercard:"$12.990"},
					{item:"Servicio de avance y compra de divisas",mastercard:"UF 0,18"},
					{item:"Servicio express de remisión de tarjeta post bloqueo",mastercard:"UF 0,5"},
					{item:"Servicio de compra internacional (1)",mastercard:"3,50%"},
					{item:"Servicio de avance en el extranjero (1)",mastercard:"2,5% + US$ 2,5"},
					{item:"Comisión de mantención mensual para Cliente con Plan Multiproducto que contemple la tarjeta en mención.",mastercard:"UF 0"},
					{item:"Comisión de mantención mensual para Cliente sin Plan Multiproducto que contemple la tarjeta en mención.",mastercard:"UF 0,14 mensual"},
					{item:"Modalidad de cobro",mastercard:"Vencido a todo evento"}
				]
			},
			{
				name:"Requisitos y Condiciones",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
							{item:"Nacionalidad Chilena, o Extranjero con residencia definitiva en el país."},
							{item:"Edad mínima 21 años."},
							{item:"Ingresos mensuales líquidos superiores a $400.000."},
							{item:"Buenos antecedentes comerciales."}
						] 
					},
					{tipo:"parrafo", content: "La aprobación está sujeta a la política comercial y de riesgo vigente."},
					{tipo:"parrafo", content: "Para acceder y operar dentro de las Políticas de Crédito de Banco Santander, es necesario que los antecedentes del cliente sean confiables, tengan un adecuado respaldo a través de la documentación mínima exigida, sean verificables cuando corresponda y contengan toda la información completa. Por consiguiente, si estás interesado en adquirir un producto crediticio deberás contar entre otros con:"},
					{tipo:"lista", content: [
						{item:"Una fuente regular, estable de ingresos y/o patrimonio suficiente para el pago del crédito solicitado."},
						{item:"No presentar morosidades o protestos vigentes."},
						{item:"Correcto comportamiento de pago con sus distintos acreedores."},
						{item:"Cumplir con la política definida."}
					]}
				]
			},
			{
				name:"Características Generales",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
							{item:"<strong>Tecnología CHIP: </strong> Le entrega mayor seguridad, minimizando fraudes y mal uso de sus tarjetas. Ahora, en lugar de deslizar su tarjeta para hacer una compra, deberá insertar la tarjeta en el terminal de venta (POS) mientras se realiza la transacción. Confirmarí su compra como siempre con su clave secreta PinPass, logrando mayor seguridad y tranquilidad en su compra."},
							{item:"<strong>Tecnología CONTACTLESS: </strong>Esta tecnología ofrece mayor rapidez en sus compras de bajo monto, ya que basta con acercar la tarjeta al lector sin hacer contacto, sin necesidad de entregar la tarjeta, deslizarla por una ranura, ni insertarla en el terminal de venta."},
							{item:"Se puede usar en más de 70.000 establecimientos comerciales a lo largo de Chile y en más de 12 millones en 87 países del mundo."},
							{item:"Recibirá mensualmente un Estado de Cuenta con el detalle de tus compras, pagos y puntos ganados."},
							{item:"Podrá realizar compras hasta en 60 cuotas en comercios asociados a Transbank S.A"},
							{item:"Hacer tus compras en 3 cuotas precio contado en los establecimientos adheridos."},
							{item:"Tarjetas adicionales sin costo, cuyas compras en Supermercados, Grandes Tiendas y Combustibles también se contabilizarán para los descuentos al titular de la Tarjeta."},
							{item:"Podrá realizar Avances en Efectivo y SuperAvances en Cuotas en la red de Cajeros Automáticos Redbanc o en cualquier sucursal del país."},
							{item:"Podrá solicitar Créditos con cargo en su Tarjeta, pagando hasta en 60 cuotas mensuales."},
							{item:"Pago Automático de Cuentas (PAT): Permite cargar tus cuentas de servicios (agua, luz, gas, etc.) en forma automática y pagarlas en una sola fecha todos los meses."}
						] 
					}
				]
			},
			{
				name:"Preguntas Frecuentes",
				num_cols: "acordeon",
				col1: [
					{
						title:"¿Para acceder a los descuentos, tengo que llamar a algún lado?", 
						content: [
							{tipo:"lista", content: [
								{item:"No es necesario que el cliente llame a VOX para solicitar la devolución. Esta se realizará automáticamente con el uso de la Tarjeta de Crédito Santander 3.2.1. Es un proceso automático y este se verá reflejado al día siguiente de realizada la transacción."}
							]}
						] 
					},
					{
						title:"¿El cliente debe escoger el rubro a bonificar?", 
						content: [
							{tipo:"lista", content: [
								{item:"El cliente no debe escoger ningún rubro especial. La tarjeta entrega devolución en los rubros de Combustible (3%), Grandes Tiendas (2%) y Supermercado (1%). Sólo debe utilizarla en alguno de los rubros indicados, y el descuento se efectuará al día siguiente de la compra en su Tarjeta de Crédito."}
							]}
						] 
					},
					{
						title:"¿Existe un mínimo para acceder a la devolución en plata?", 
						content: [
							{tipo:"lista", content: [
								{item:"No existe mínimos para las devoluciones. Cliente puede compras $100 en Supermercado y se le devolverá el 1% de la compra."}
							]}
						] 
					},
					{
						title:"¿Cuál es la fecha que se considera para el límite de la facturación por rubro?", 
						content: [
							{tipo:"lista", content: [
								{item:"Para la devolución de plata correspondiente a cada uno de los rubros, y los topes mensuales de estos mismos, se consideran las compras realizadas entre las Fechas de Facturación de la Tarjeta Santander 3.2.1. Como ejemplo, el cliente debe realizar $100.000 en compras de combustible entre la fecha de facturación de su Tarjeta y la próxima facturación de la misma, para que tenga una devolución de $3.000 como tope máximo en el rubro."}
							]}
						] 
					},
					{
						title:"¿Dónde el cliente podrá ver diariamente las devoluciones realizadas por las compras en cada uno de los rubros?", 
						content: [
							{tipo:"lista", content: [
								{item:"Todos los clientes que dispongan de la Tarjeta de Crédito Santander 3.2.1., podrán ver las devoluciones, ingresando a través de Internet www.santander.cl en el sitio privado, sección Tarjetas de Crédito, Movimientos por Facturar."},
								{item:"Además podrá revisar el total de bonificación mensual realizada a modo de resumen en su Estado de Cuenta de su Tarjeta de Crédito Santander 3.2.1. por rubro."}
							]}
						] 
					},
					{
						title:"¿Cuándo se le abona el descuento al cliente?", 
						content: [
							{tipo:"lista", content: [
								{item:"Es un proceso automático y este se verá reflejado al día siguiente de realizada la transacción."}
							]}
						] 
					}
				]
			}
		]
	},
	// WORLDMEMBERFERRARI
	{
		url:"worldmemberferrari",
		name:"WorldMember Santander FERRARI",
		min_renta: 0,
		range: 9,
		tipoTarjeta:"lanpass",
		clasificacion:"viajes",
		idForm: "",
		onbording: false,
		title:"Disfruta un mundo de grandes experiencias y beneficios únicos. ",
		bajada:"Descuento en store.ferrari.com Ferrari Store.com es el sitio de comercio electrónico oficial de Ferrari, a través del cual usted podrá descubrir cientos de productos originales y comprarlos en línea. Gracias a su Tarjeta WorldMember Santander Ferrari usted obtendrá un 20% de descuento pagando con su Tarjeta.",
		imagen: "img/img-tarjetas/santander-worldmember-ferrari.png",
		link:"tarjetas/worldmemberferrari/index.asp",
		rutClave:{
			mensaje:"Si tienes una Tarjeta de Crédito WorldMember contratada desde antes del 5 de abril de 2017, revisa los beneficios de tu tarjeta",
			cod:"295"
		},
		ver_mas:[
			{item:"Accede a la categoría Gold LATAM Pass."},
			{item:"Hasta 20% de descuento en FerrariStore.com."}
		],
		legales:[
			{item:"<strong>Vuela Más:</strong"},
			{item:"La acumulación de KMS. LATAM Pass en cada período mensual de facturación opera hasta el monto del respectivo cupo nacional e internacional autorizado por el Banco para cada tarjeta. Esto aplica para todas las compras y pagos realizados en pesos y/o moneda extranjera en cada periodo. Los abonos que se efectúen durante el período mensual de facturación, aunque confieran nuevas disponibilidades sobre los cupos autorizados, no habilitan la acumulación de mayor número de KMS. LATAM Pass."},
			{item:"<br/>"},
			{item:"<strong>Vigencia de los kilómetros:</strong"},
			{item:"Los kms. acumulados tienen vigencia hasta el 31 de diciembre del año subsiguiente al que fueron acreditados. Si entre diciembre del año anterior y noviembre del año en curso acumulas una cantidad igual o superior a 12.000 KMS. LATAM Pass con el uso de tu Tarjeta de Crédito WorldMember Santander LATAM Pass, renovarás el saldo completo de kms. por 36 meses."},
			{item:"(1) Rubros en lo que no se acumula kms: Se excluyen las siguientes operaciones con Tarjeta de Crédito y/o Redcompra Santander LATAM Pass: compras de cargo inmediato (avances en efectivo, compras en casinos y juegos de azar), compra de combustibles, pago de impuestos en general, notas de débito y/o crédito, así como cargo por intereses o cargos por parte del Banco (comisiones). Acumulación de kilómetros LATAM Pass en cada período mensual de facturación relacionados a compras y pagos efectuados en pesos o moneda extranjera con la Tarjeta de Crédito Santander LATAM Pass, opera hasta el monto del respectivo cupo nacional o internacional autorizado por el Banco para la tarjeta a la fecha del estado de cuenta."},
			{item:"(2) Conozca los términos y condiciones de Multiplica, comercios adheridos, beneficio y vigencia de la adhesión de cada comercio en www.lan.com/multiplica. El Programa LATAM Pass, Multiplica y el abono y canje de Kilómetros LATAM Pass son responsabilidad de LATAM AIRLINES GROUP S.A., sin que corresponda a Banco Santander Chile intervención en ello. Revise términos y condiciones aquí."},
			{item:"<br/>"},
			{item:"<strong>Vuela Antes:</strong>"},
			{item:"(2) Responsabilidad de bonificación de 25%: Bonificación extra de KMS. LATAM Pass aplicable solo en tarifas, rutas y fechas que permitan la acumulación de KMS. LATAM Pass. Todos estos beneficios se rigen bajo el reglamento LATAM Pass, según se indica en https://www.latam.com/es_cl/latam-pass/."},
			{item:"(3) Solicitud de Anticipo de kms.: El anticipo se debe solicitar en www.santander.cl. Beneficio de anticipo no aplica a clientes que hayan contratado Tarjeta de Crédito WorldMember, que tengan un cupo inferior a $4.000.000."},
			{item:"(4) Transferencia de KMS. LATAM Pass: Revisar términos y condiciones en https://www.latam.com/es_cl/latam-pass/."},
			{item:"<br/>"},
			{item:"<strong>Vuela Mejor:</strong>"},
			{item:"(5) Obtención Categoría Gold: Los beneficios Gold provenientes de la tarjeta no son acumulables con otras categorías Elite de LATAM Pass. En caso que un año determinado pierda la categoría, los beneficios asociados a ella no seguirán vigentes, así como tampoco los 6 cupones de UPG entregados por la tarjeta. Podrá recuperar dicha categoría el año siguiente si durante ese año cumple la regla. Esta regla no aplica a clientes que hayan contratado Tarjeta de Crédito WorldMember, que tengan un cupo inferior a $4.000.000."},
			{item:"(6) Cupones Upgrade: Los clientes titulares de la Tarjeta de Crédito WorldMember Santander LATAM Pass recibirán en total un máximo de 3 cupones de Upgrade anuales. Los cupones de Upgrade, estarán vigentes hasta el 31 de marzo del año siguiente a aquel en que fueron entregados y se renovarán automáticamente siempre y cuando la tarjeta se encuentre vigente y utilizable. Los cupones no son acumulables año a año. Se excluyen pasajes comprados en familia tarifaria Base."},
			{item:"(7) Responsabilidad Salones Vip LATAM: Acceso a Salón VIP Grupo LATAM Airlines Santiago es responsabilidad de LATAM AIRLINES GROUP S.A. El acceso está limitado a la capacidad del salón."},
			{item:"(8) Uso de Salones en el aeropuerto y precio Priority Pass –Lounge KEY: El acceso a los salones internacionales será con cargo al cliente, con un costo de US$27 por persona. Antes de viajar puede ingresar a www.prioritypass.com o https://www.loungekey.com/es y ver directorio de salas de aeropuertos disponibles."},
			{item:"(9) Condiciones Salones Pacific: El acceso a salones vip Pacific Club es gratuito solamente para el titular de la tarjeta y es de exclusiva responsabilidad de Servicios Aeroportuarios S.A. Estos beneficios se otorgan solamente al titular de la Tarjeta de Crédito WorldMember Santander LATAM Pass y no son acumulables a aquellos entregados a los clientes con anterioridad, pudiendo obtener en su totalidad y como máximo solamente los beneficios antes descritos. Programa LATAM Pass y todos los beneficios LATAM Pass asociados a la tarjeta son de exclusiva responsabilidad de LATAM AIRLINES GROUP S.A., no cabiéndole a Banco Santander Chile responsabilidad alguna en ello ni en la ulterior atención que ello demande. Para obtener el detalle y condiciones de cada beneficio puede llamar al (600) 320 3030 o consultar en www.santander.cl o www.latam.com"},
			{item:"<strong>Seguros y Servicios Tab:"},
			{item:"Para detalles sobre limitaciones, exclusiones, información detallada e iniciar proceso de reclamos por servicios o seguros MasterCard, debe llamar a: <strong>1-800-307-7309</strong> sin cobro en USA o Canadá <strong>1-636-722-7111</strong> cobro revertido."},
			{item:"<br/>"},
			{item:"<strong>Tarifas:</strong>"},
			{item:"(1) Los porcentajes deben aplicar por el monto del avance o compra según corresponda.<br/>(2) Comisión aplica a cada transacción de avance en efectivo en chile. Tarifa válida a partir de 01 de diciembre de 2013 hasta 31 de diciembre de 2017. A partir de esta última fecha, aplica la tarifa precisada en el contrato del cliente. <br/>El Banco se reserva el derecho a modificarlas, conforme a las normas impartidas por la Superintendencia de Bancos. El cliente, en caso de no estar conforme con las comisiones informadas podrá poner término a su contrato. Este tarifado no aplica a Tarjetas Santander Banefe."},
			{item:"<br/>"},
			{item:"<strong>Preguntas Frecuentes:</strong>"},
			{item:"(1) Se excluyen las siguientes operaciones con Tarjeta de Crédito LATAM Pass: compras de cargo inmediato (avances en efectivo, compras en casinos y juegos de azar), compra de combustibles, pago de impuestos en general (contribuciones, IVA, etc), notas de débito y/o crédito, así como cargos por intereses o cargos por parte del Banco (comisiones). Acumulación de kilómetros LATAM Pass en cada período mensual de facturación relacionados a compras y pagos efectuados en pesos o moneda extranjera con la Tarjeta de Crédito Santander LATAM Pass, opera hasta el monto del respectivo cupo nacional o internacional autorizado por el Banco para la tarjeta a la fecha del estado de cuenta.<br/>(2) Beneficio exclusivo para clientes de Tarjetas de Crédito LATAM Pass que posean la Tarjeta Redcompra Santander. Se bonifican las compras realizadas en establecimientos comerciales adheridos a Transbank S.A. Se excluyen compras de combustible, casinos, juegos de azar y pagos de impuesto en general, los que no generan kilómetros LATAM Pass. Se excluyen también los giros en cajeros automáticos Redbanc. Los kilómetros acumulados se verán reflejados en la cuenta del titular LATAM Pass al mes siguiente o subsiguiente de realizadas las compras. Los beneficios del programa LATAM Pass son de exclusiva responsabilidad de LATAM AIRLINES GROUP S.A., no cabiéndole a Banco Santander Chile responsabilidad alguna en ello ni en la ulterior atención que ello demande.<br/>(3) En tarifas, rutas y fechas limitadas que permitan la acumulación de kilómetros LATAM Pass."}
		],
		tabs: [
			{
				name:"Beneficios Tarjetas",
				num_cols: "1",
				col1: [
					{tipo:"titulo", content: "Descuento en store.ferrari.com"},
					{tipo:"parrafo", content: "Ferrari Store.com es el sitio de comercio electrónico oficial de Ferrari, a través del cual usted podrá descubrir cientos de productos originales y comprarlos en línea. Gracias a su Tarjeta WorldMember Santander Ferrari usted obtendrá un 20% de descuento pagando con su Tarjeta."},
					{tipo:"titulo", content: "Vuela más"},
					{tipo:"sub-titulo", content: "Beneficio de Acumulación de kilómetros"},
					{tipo:"lista", content: [
						{item:"<strong>1,5 KMS. LATAM Pass por dólar gastado</strong> en todas las compras en Chile y el extranjero realizadas con la Tarjeta de Crédito. (1)"},
						{item:"<strong>0,5 KMS. LATAM Pass por dólar gastado</strong> en compras realizadas con la Tarjeta de Débito (Redcompra) en Chile y en el extranjero. (1)"},
						{item:"<strong>Multiplica tus KMS LATAM Pass.</strong> Todas tus compras con Tarjetas de Crédito Santander LATAM Pass, en tiendas adheridas, multiplicarán los kms. que acumulas (2). Revisa las tiendas adheridas <a href='http://www.lan.com/multiplica' target='_blank'>aquí</a>"}
					]},
					{tipo:"titulo", content: "Vuela antes"},
					{tipo:"lista", content:[
						{item:"<strong>Acumulación de 25% de KMS. LATAM Pass adicionales al viajar. (2)</strong><br/>Bono adicional de kms. sobre la distancia acumulada en vuelos al viajar en LATAM y American Airlines. (Beneficio asociado a categoría Gold)."},
						{item:"<strong>Anticipo de 60.000 KMS. LATAM Pass para usarlos cuando quieras (3)</strong>"},
						{item:"<strong>Transferencia de KMS. LATAM Pass sin costo.<sup>(4)</sup> </strong><br/>Cada año, la primera transferencia de kms. que realice el titular de la Tarjeta de Crédito WorldMember Santander LATAM Pass no tendrá costos asociados. Para acceder a este beneficio, dicha transferencia deberá contemplar como mínimo 15.000 KMS. LATAM Pass y como máximo 100.000 KMS. LATAM Pass."}
					]},
					{tipo:"titulo", content: "Vuela mejor"},
					{tipo:"lista", content:[
						{item:"<strong>Acceso a Categoría Elite Programa de Pasajero Frecuente LATAM Pass (5).</strong> <br/>Al obtener la Tarjeta de Crédito WorldMember Santander LATAM Pass, automáticamente pasas a ser parte de la categoría Elite Gold del exclusivo programa de Pasajero frecuente de LATAM, LATAM Pass."}
					]},
					{tipo:"sub-titulo", content:"Beneficios y servicios asociados al viaje"},
					{tipo:"lista", content:[
						{item:"<strong>Sin comisión en compras internacionales.</strong>"},
						{item:"<strong>3 Cupones de Upgrade LATAM Pass anuales. (6)</strong> <br/>Un Upgrade permite acceder a la clase de servicio inmediatamente superior en vuelos vendidos y operados por LATAM. Es decir, si compras un pasaje en Clase Economy, te permite acceder a Clase Business. <br/><br/>Los cupones Upgrade de la tarjeta WorldMember Santander LATAM Pass no son acumulables con otros beneficios de categorías Elite de LATAM Pass. <br/> Revisa más detalles de este beneficio <a href='https://www.latam.com/es_cl/latam-pass/upgrade-de-cabina/upgrade-de-cortesia/' target='_blank'>aquí.</a>"},
						{item:"<strong>Check-ln preferente en Aeropuerto de Santiago Arturo Merino Benitez al viajar en LATAM, en rutas internacionales.. </strong><br/>Podrás chequearte en los counters preferentes en el Aeropuerto de Santiago Arturo Merino Benitez, junto a un acompañante de vuelo. Solo debes mostrar tu Tarjeta de Crédito Platinum Santander LATAM Pass. Este beneficio se encuentra disponible solo para las rutas internacionales y es válido para vuelos en LATAM. Beneficio asociado a categoría Elite Gold LATAM Pass."},
						{item:"<strong>Equipaje  adicional de hasta 23 kilos (sin costo) al volar en LATAM </strong><br/>En vuelos nacionales e internacionales, vendidos y operados por LATAM desde origen a destino final, el tarjetahabiente de WorldMember Santander LATAM Pass cuenta siempre con el beneficio exclusivo de una pieza de equipaje de hasta 23 kg sin costo. Beneficio no acumulable con otros entregados en rutas específicas.<br/>Para acceder a este beneficio, debes presentar tu Tarjeta de Crédito WorldMember Ferrari Santander al agente de counter en el aeropuerto."},
						{item:"<strong>Prioridad de Equipaje </strong><br/>En vuelos internacionales vendidos y operados por LATAM el equipaje será etiquetado en el aeropuerto con el fin de darle prioridad en el desembarque del vuelo. Beneficio asociado a categoría Gold."},
						{item:"<strong>Acceso a Salón VIP Grupo LATAM Airlines Santiago con acompañante (7)</strong><br/>Al volar en LATAM podrás acceder gratis junto a un acompañante al Salón VIP Grupo LATAM Airlines Santiago. Si deseas ingresar con más de un acompañante (incluyendo niños), tendrá un costo adicional.<br/>Durante períodos de alta temporada, es posible que el acceso a ciertos salones VIP se restrinjan debido a limitaciones de capacidad."},
						{item:"<strong>Acceso a los Salones de Aeropuerto (8)</strong><br/>Revisa <a href='/tarjetas/nuestras-tarjetas/pdf/salones-vip.pdf' target='_blank'>aquí</a> detalles y condiciones de acceso."},
						{item:"<strong>Acceso a Salones Pacific Club en Chile.(9) </strong><br/>Revisa <a href='/tarjetas/nuestras-tarjetas/pdf/salones-vip.pdf' target='_blank'>aquí</a> detalles y condiciones de acceso."}
					]},
					{tipo:"parrafo", content: "Si tienes una Tarjeta de Crédito WorldMember contratada desde antes del 5 de abril de 2017, revisa los beneficios de tu tarjeta"},
					{tipo:"importante", content:[
						{item:"Beneficios del Programa Santander LATAM Pass se otorgan al titular de la tarjeta y no son acumulables por Tarjeta de Crédito contratada o con categorías Elite superiores del programa LATAM Pass."},
						{item:"Plazo de Activación de beneficios asociados a tu Tarjeta de Crédito (incluyendo categoría Gold LATAM Pass), quedarán activos en un plazo de 15 días hábiles contados desde la activación de dicha tarjeta."},
						{item:"Revisa detalles y condiciones de los beneficios en cada apartado de beneficios de vuela más, antes y mejor."},
						{item:"Todos los beneficios y categoría Gold LATAM Pass asociados a tu tarjeta quedarán activos hasta 15 días hábiles después de activada la tarjeta. Para mantener la categoría debes realizar compras durante un año por al menos $4.000.000. En caso que un año determinado se pierda la categoría, podrás recuperarla para el año siguiente si durante ese año se cumple la regla. Restitución de categoría, en caso que aplique, se realiza durante el mes de abril del año siguiente."},
						{item:"Estos beneficios se otorgan solamente al titular de la tarjeta y no son acumulables por tarjeta de crédito contratada . ( ej: si tienes una tarjeta de crédito Worldmember Limited Santander LATAM Pass y una tarjeta de crédito Worldmember Santander LATAM Pass , solo prevalecerá el uso de los beneficios de una tarjeta de crédito) Los beneficios de categoría Gold LATAM Pass no son acumulables con otras categorías Elite de LATAM Pass. Los beneficios no financieros del Programa Santander LATAM Pass rigen hasta el 31 de diciembre de 2017."}
					]}
					
				]
			},
			{
				name:"Seguros y Servicios",
				num_cols: "servicios",
				pdf:"../../pdf/Guia_Beneficios_MC_WorldMember.pdf",
				col1:[
					{
						tabs:[
							{name:"MasterCard", content:[
								{name:"Servicios", content:[
									{item:"Servicio de asistente personal: Concierge"},
									{item:"Servicio de Asistencia al viajero"},
									{item:"MasterCard Global Service"},
									{item:"Wi-Fi Boingo"}
								]},
								{name:"experiencias", content:[
									{item:"Priceless Cities"},
									{item:"MasterCard Black International Shopping USA"}
								]},
								{name:"Seguros", content:[
									{item:"MasterCard Assist Plus (US$150.000)"},
									{item:"Seguro de Schengen"},
									{item:"MasterCard Seguro de Auto (Cobertura de US $75.000 (Alrededor del mundo) hasta 60 días consecutivos.)"},
									{item:"Garantía Extendida (Hasta US $2.500 por Ocurrencia / US $5.000 por 12 meses)"},
									{item:"Seguro de Pérdida o Retraso de Equipaje (Pérdida de equipaje hasta por US $3.000 Retraso de equipaje hasta por US $600 (más de 4 horas)"},
									{item:"Protección de Compras (Hasta US $5.000 por Ocurrencia / US $20.000 por 12 meses, hasta 90 días después de realizada la compra cubierta)"},
									{item:"Protección Contra Asalto o Robo ATM (Cobertura por efectivo robado hasta por US $1.000 / US $3.000 por 12 meses Cobertura por muerte accidental US $10.000)"},
									{item:"Seguro Inconvenientes de Viaje (Cancelación de viajes hasta US $3.000). Demoras de viajes hasta US $200 (más de 4 horas)."}
								]}
							]}
						]
					}
				]
			},
			{
				name:"Acceso Salones VIP",
				num_cols:"1",
				col1:[
					{tipo:"titulo", content:"¿Dónde y cómo solicitar tu Acceso Salones VIP?"},
					{tipo:"sub-titulo", content:"Para Tarjetas de Crédito WorldMember Limited Santander LATAM Pass Mastercard"},
					{tipo:"parrafo", content:"La Tarjeta Priority Pass cambió al servicio de MasterCard Airport Experience, solo deberás cancelar tu acceso a los salones en aeropuertos VIP “Lounge Key” con tu Tarjeta de Crédito WorldMember o WorldMember Limited o WorldMember Business."},
					{tipo:"lista", content:[
						{item:"Si tienes la tarjeta Priority Pass podrás utilizarla hasta el 30 de Agosto de 2017, posteriormente solo deberás mostrar y cancelar directo en los Salones VIP con la Tarjeta de Crédito WorldMember Black o WorldMember Limited"},
						{item:"El cargo del servicio se realizará directo al Cupo Internacional de tu Tarjeta de Crédito WorldMember Black o WorldMember Limited , se visualizará en tus movimientos por facturar al tercer o cuarto día después del acceso al salón. Recuerda que cada visita es de USD27 por persona."},
						{item:"No importa la aerolínea en la que viajes o el pasaje que tengas, disfrutarás de las más de 850 Salas VIP “Lounge Key” en todo el mundo."},
						{item:"Para localizar las Salas VIP y ofertas solo debes descargar la aplicación móvil “MasterCard Airport Experiences” o a través del sitio web <a href='www.airport.mastercard.com' target='_blank'>www.airport.mastercard.com</a>, donde encontrarás: <br/><br/> <span class='success'>Ofertas culinarias</span><br/> <span class='success'>Ofertas en tiendas minoristas</span><br/> <span class='success'>Ofertas de SPA</span>"}
					]},
					{tipo:"sub-titulo", content:"<hr class='pdtop'>Para Tarjetas de Crédito WorldMember Santander LATAM Pass VISA"},
					{tipo:"lista", content:[
						{item:"Luego de recibir tu tarjeta, al ingresar a Santander.cl, con tu Rut y clave de acceso, recibirás un mensaje con el código que necesitas para poder inscribirte y obtener la Membresía Priority Pass."},
						{item:"Cuando recibas el código debes inscribirte en www.prioritypass.com/VISA/SANTANDERCHILE. Conoce el paso a paso de cómo obtener la Membresía Priority Pass <a href='/tarjetas/nuestras-tarjetas/pdf/priority-pass.pdf' target='_blank'>aquí</a>"},
						{item:"Una vez ingreses el código y te inscribas podrás descargar inmediatamente después de realizar tu inscripción, tu nueva Tarjeta Priority Pass DIGITAL"},
						{item:"El envió de la tarjeta física, será realizado directamente por Priority Pass en un plazo máximo de 20 días hábiles una vez realizada tu inscripción."}
					]}
				]
			},
			{
				name:"Tarifas",
				num_cols: "table",
				orientation:"horizontal",
				vigencia:"Tarifa válida contratos celebrados a partir del 3 de marzo 2017.",
				tarjetas:[
					{mastercard: true, head:" MASTERCARD Internacional WorldMember Ferrari ©"},
					{visa: false, head:""},
					{american: false, head:""}
				],
				col1: [
					{item:"Servicio de compra en cuotas	",mastercard:"$0"},
					{item:"Servicio de aumento temporal de cupo por exceso",mastercard:"$0"},
					{item:"Comisión de mantención mensual para Cliente con Plan Multiproducto que contemple la tarjeta en mención.",mastercard:"UF 0,22 mensual"},
					{item:"Comisión de mantención mensual para Cliente sin Plan Multiproducto que contemple la tarjeta en mención.",mastercard:"UF 0,34 mensual"},
					{item:"Descuento del 100% de mantención sobre cuota semestral, por consumo",mastercard:"No aplica"},
					{item:"Modalidad de cobro",mastercard:"Vencido a todo evento"},
					{item:"Servicio de avance en efectivo nacional (2)",mastercard:"UF 0,22"},
					{item:"Servicio de avance EN CUOTAS nacional (2)",mastercard:"UF 0,22"},
					{item:"Servicio de avance en el extranjero (1)",mastercard:"2,5% + US$ 2,5"},
					{item:"Servicio de súperavance",mastercard:"$9.990"},
					{item:"Servicio de compra internacional (1)",mastercard:"0%"},
					{item:"Servicio de avance y compra de divisas",mastercard:"UF 0,18"},
					{item:"Servicio de remisión de tarjeta post bloqueo",mastercard:"No Aplica"},
					{item:"Servicio express de remisión de tarjeta post bloqueo",mastercard:"UF 0"}
				]
			},
			{
				name:"Requisitos y Condiciones",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
							{item:"Nacionalidad Chilena o Extranjero con residencia definitiva en el país."},
							{item:"Edad mínima 21 años."},
							{item:"Ingresos mensuales líquidos superiores a $3.000.000"},
							{item:"Buenos antecedentes comerciales."},
							{item:"La aprobación está sujeta a la política comercial y de riesgo vigente."}
						] 
					},
					{tipo:"parrafo", content: "Para acceder y operar dentro de las Políticas de Crédito de Banco Santander , es necesario que los antecedentes del cliente sean confiables, tengan un adecuado respaldo a través de la documentación mínima exigida, sean verificables cuando corresponda y contengan toda la información completa. Por consiguiente, si estás interesado en adquirir un producto crediticio deberás contar entre otros con:"},
					{tipo:"lista", content: [
							{item:"Una fuente regular, estable de ingresos y/o patrimonio suficiente para el pago del crédito solicitado."},
							{item:"No presentar morosidades o protestos vigentes."},
							{item:"Correcto comportamiento de pago con sus distintos acreedores."},
							{item:"Cumplir con la política definida."}
						] 
					}
				]
			},
			{
				name:"Características Generales",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
							{item:"<strong>Tecnología CHIP: </strong>Le entrega mayor seguridad, minimizando fraudes y mal uso de sus tarjetas. Ahora, en lugar de deslizar su tarjeta para hacer una compra, deberá insertar la tarjeta en el terminal de venta (POS) mientras se realiza la transacción. Confirmará su compra como siempre con su clave secreta PinPass, logrando mayor seguridad y tranquilidad en su compra."},
							{item:"<strong>Tecnología CONTACTLESS: </strong>Esta tecnología ofrece mayor rapidez en sus compras de bajo monto, ya que basta con acercar la tarjeta al lector sin hacer contacto, sin necesidad de entregar la tarjeta, deslizarla por una ranura, ni insertarla en el terminal de venta."},
							{item:"Se puede usar en más de 50.000 establecimientos comerciales a lo largo de Chile y en más de 12 millones en 87 países del mundo."},
							{item:"Recibirás mensualmente un Estado de Cuenta con el detalle de tus compras, pagos y premios ganados."},
							{item:"Planificación de compra con el sistema de cuotas fijas."},
							{item:"Hacer tus compras en 3 cuotas precio contado en los establecimientos adheridos."},
							{item:"Tarjetas adicionales sin costo."},
							{item:"Pago Automático de Cuentas (PAT): Permite cargar tus cuentas de servicios (agua, luz, gas, etc.) en forma automática y pagarlas en una sola fecha todos los meses"},
							{item:"Descuentos especiales en restaurantes y tiendas exclusivas <a href='https://mov.santander.cl/beneficios/?segmento=s-personas' target='_blank'>Ver Súper Descuentos</a>"}
						] 
					}
				]
			},
			{
				name:"Preguntas Frecuentes",
				num_cols: "acordeon",
				col1: [
					{
						title:"¿Qué es el programa LATAM PASS?", 
						content: [
							{tipo:"parrafo", content: "Programa de beneficios que acumula Kilómetros LATAM Pass en el programa Pasajero Frecuente LATAM Pass por las compras realizadas con la Tarjeta de Crédito WorldMember Santander Ferrari en Chile y en el extranjero y con la Tarjeta Redcompra Santander. Los kilómetros acumulados pueden ser canjeados por pasajes aéreos en LATAM en las líneas aéreas asociadas a la alianza Oneworld o por productos del catálogo de LATAM Pass."}
						] 
					},
					{
						title:"¿Cómo se acumulan kilómetros?", 
						content: [
							{tipo:"parrafo", content: "Por utilización de Tarjetas de Crédito LATAM Pass y Tarjeta Redcompra Santander:"},
							{tipo:"lista", content: [
								{item:"1,5 KMS. LATAM Pass por cada dólar gastado en Chile o en el extranjero con la Tarjeta de Crédito LATAM Pass Santander (1)."},
								{item:"0,5 KM. LATAM Pass por cada dólar gastado en Chile con la Tarjeta Redcompra Santander (2)."}
							]},
							{tipo:"parrafo", content: "Por vuelos:"},
							{tipo:"lista", content: [
								{item:"Tú acumulas kilómetros (3) cada vez que vuelas en LATAM, en las líneas aéreas integrantes de Oneworld y en las líneas aéreas asociadas a LATAM Pass. Puedes canjear estos kilómetros por pasajes gratis a más de 570 destinos alrededor del mundo. Actualmente, las líneas aéreas integrantes de la alianza Oneworld son: LATAM, American Airlines, British Airways, Cathay Pacific, Finnair, Iberia, JAL, Malev, Qantas y Royal Jordanian."}
							]}
						] 
					},
					{
						title:"¿Dónde consultar sus kilómetros?", 
						content: [
							{tipo:"lista", content: [
								{item:"En cualquier oficina LATAM, o en el teléfono 600-526-2000"},
								{item:"En www.latam.com, ingresando nombre de usuario y clave"},
								{item:"Adicionalmente, los kilómetros acumulados son informados mensualmente a través del Estado de Cuenta."}
							]}
						] 
					},
					{
						title:"¿Cual es la vigencia de los Kilómetros?", 
						content: [
							{tipo:"parrafo", content: "Los Kilómetros originados por compras de Tarjetas LATAM Pass tendrán vigencia hasta el 31 de diciembre del año subsiguiente a la fecha de su generación. En caso de acumular 12.000 kms. o más con el uso de sus Tarjetas Santander LATAM Pass entre Diciembre del año previo y Noviembre del año en que se verifica la definición , se renovará el saldo completo de sus kms por 36 meses."}
						] 
					},
					{
						title:"¿cómo usar los upgrade?", 
						content: [
							{tipo:"lista", content: [
								{item:"Viajar en un vuelo vendido y operado por LATAM."},
								{item:"Viajar con un pasaje pagado (se excluyen promociones de kilómetros + pesos y algunos programas turísticos)."},
								{item:"Que el precio pagado por ese pasaje cumpla con la tarifa mínima exigida para hacer efectivo el Upgrade. (Familias tarifarías Base Plus, Flexible y Full Flexible)."},
								{item:"Viajar con un pasaje canjeado con KMS LATAM Pass. (en este caso no es requisito acumular KMS LATAM Pass)"},
								{item:"Cumplir con la cantidad de cupones necesaria para ruta."},
								{item:"Que haya espacio disponible en la cabina a la que quiere hacer el Upgrade, en todos los tramos del vuelo para vuelos en tránsito."},
								{item:"La tarifa mínima que aplica para cada ruta, es la definida por el origen y destino final del pasajero que quiere hacer uso del beneficio."},
								{item:"Si los cupones van a ser usados por un acompañante, éste debe viajar en compañía del socio titular de los cupones."},
								{item:"Para utilizar sus cupones de Upgrade, deberá estar acumulando KMS. LATAM Pass en ese vuelo a excepción que esté viajando con un pasaje canjeado con kms."},
								{item:"El cupón es válido hasta la fecha indicada en el Estado de Cuenta de Upgrades."},
								{item:"LATAM se reserva el derecho de modificar las condiciones aplicables al beneficio de Upgrade."},
								{item:"La postulación al Upgrade de cabina debe realizarse a través de LATAM.com desde 48 hasta 2 hrs. Antes de la salida del vuelo"},
								{item:"La postulación de Upgrade no asegura el acceso a la cabina business, esto depende de los cupos disponibles en el avión, lo cual será confirmado en el Aeropuerto antes de abordar."}
							]}
						] 
					},
					{
						title:"¿Queŕ debo hacer para usar el check in preferente?", 
						content: [
							{tipo:"parrafo", content: "Deberá presentar su tarjeta de socio elite (Premium, Premium Silver y Comodoro) entregada por LATAM y chequearse en los counters de clase Ejecutiva que tengan disponibilidad, aunque viaje en clase Turista. Este beneficio es válido sólo para vuelos internacionales, ya sea en LATAM o en las líneas aéreas de oneworld."}
						] 
					},
					{
						title:"¿Tengo acceso a boarding preferente?", 
						content: [
							{tipo:"parrafo", content: "No."}
						] 
					},
					{
						title:"Algunos vuelos LATAM son operados por otras líneas aéreas, ¿los beneficios corren en estos casos?", 
						content: [
							{tipo:"parrafo", content: "No. Los beneficios aplican solamente para vuelos operados por LATAM."}
						] 
					},
					{
						title:"¿Si tenía Tarjeta Platinum LATAM Pass y ahora saco Worldmember los beneficios se suman entre ellos?", 
						content: [
							{tipo:"parrafo", content: "No, los beneficios LATAM Pass no son acumulativos a los entregados por las categorías LATAM Pass previamente o a los otorgados con otras Tarjetas Santander LATAM Pass pudiendo obtener en su totalidad y como máximo solamente los beneficios de la Tarjeta WorldMember."}
						] 
					},
					{
						title:"Con respecto al equipaje adicional", 
						content: [
							{tipo:"sub-titulo", content: "¿Cuántos kilos puedo llevar por viaje?"},
							{tipo:"parrafo", content: "La cantidad de kilos normales permitidos por vuelo dependerá de la ruta volada y de la cabina. Más detalle en LATAM.com / Información para tu viaje / Equipaje en bodega. Al ser titular de la Tarjeta de Crédito WorldMember Ferrari Santander LATAM Pass, podrás transportar un equipaje adicional de hasta 23 kilos."},
							{tipo:"sub-titulo", content: "¿Este beneficio aplica a todas las tarifas de LATAM?"},
							{tipo:"parrafo", content: "Si, este beneficio es aplicable para la compra en cualquier tarifa o canje de pasajes en todas sus cabinas."},
							{tipo:"sub-titulo", content: "¿Cuáles son las tarifas de LATAM , que no incluye equipaje en la venta del pasaje?"},
							{tipo:"parrafo", content: "Las tarifas “Promo” y “Light” de LATAM son las únicas que no incluyen equipaje en el costo del pasaje , sin embargo , al ser titular de la Tarjeta de Crédito WorldMember Ferrari Santander LATAM Pass y haber comprado en estas tarifas podrás transportar un equipaje de hasta 23 kilos."},
							{tipo:"sub-titulo", content: "¿Puedo usar el beneficio de equipaje adicional en todos los vuelos Operados por LATAM?"},
							{tipo:"parrafo", content: "Si, en vuelos operados y embarcados en LATAM desde origen a destino final.Este beneficio no es acumulable con el entregado por la categoría de socio LATAM Pass, por lo tanto como máximo el pasajero tendrá derecho a 1 equipaje adicional de hasta 23 kilos en vuelos LATAM, independiente de su categoría elite."},
							{tipo:"sub-titulo", content: "¿Mis acompañantes también tienen este beneficio?"},
							{tipo:"parrafo", content: "No. Este beneficio es sólo para el titular de la Tarjeta de Crédito WorldMember Ferrari Santander LATAM Pass."},
							{tipo:"sub-titulo", content: "¿Si mi adicional viaja sólo también tiene acceso a este beneficio?"},
							{tipo:"parrafo", content: "No."},
							{tipo:"sub-titulo", content: "¿Cuántos kilos permite este equipaje adicional?"},
							{tipo:"parrafo", content: "Hasta 23 kilos."},
							{tipo:"sub-titulo", content: "¿Si obtengo Upgrade, tengo posibilidad también de otro equipaje adicional?"},
							{tipo:"parrafo", content: "No."},
							{tipo:"sub-titulo", content: "¿Beneficio de equipaje adicional es sólo cuando compro el pasaje con la tarjeta?"},
							{tipo:"parrafo", content: "No, el beneficio se realiza al presentar la Tarjeta de Crédito WorldMember Ferrari Santander LATAM Pass en el momento del Check-in, independiente si el pasaje fue comprado o canjeado."},
							{tipo:"sub-titulo", content: "¿Tengo que mostrar la tarjeta para obtener el beneficio o estoy inscrito con mi RUT?"},
							{tipo:"parrafo", content: "Tienes que mostrar la tarjeta al momento del Check-in."},
							{tipo:"sub-titulo", content: "¿Tengo beneficio de equipaje adicional si viajo en otra aerolínea?"},
							{tipo:"parrafo", content: "No, este beneficio aplica solamente para vuelos OPERADOS por LATAM."}
						] 
					}
				]
			}
		]
	},
	// COCHA PLATINUM
	{
		url:"cochaplatinum",
		name:"Platinum Santander Cocha",
		range: 3,
		min_renta:"1.000.000",
		max_renta:"1.299.999",
		featured: false,
		tipoTarjeta:"cocha",
		clasificacion:"viajes",
		idForm: "",
		onbording: false,
		title:"",
		bajada:"Programa de beneficios que acumula CochaPuntos por las compras realizadas con la Tarjeta de Crédito en Chile y en el extranjero.",
		imagen: "img/img-tarjetas/santander-cocha-pl.png",
		link:"tarjetas/cochaplatinum/index.asp",
		ver_mas:[
			{item:"Acumula 1 CochaPunto por cada $100 de compras en establecimientos comerciales nacionales. (2)"},
			{item:"Acumula 25 CochaPuntos por cada US$10 de compras en establecimientos comerciales en el extranjero. (2)"}
		],
		legales:[
			{item:"<strong>Beneficios:</strong>"},
			{item:"Las compras realizadas con las Tarjetas adicionales acumulan puntos para la cuenta del Titular. Si tienes más de una Tarjeta de Crédito Santander Cocha, las compras acumulan en una sola cuenta. (Rut titular) Para efectos de canje 1 CochaPunto equivale a $1 de descuento en productos y servicios Cocha. Todo lo que acumules te sirve para canjear con un mínimo de 10.000 CochaPuntos."},
			{item:"(2) Se excluyen las compras de cargo inmediato, bencina, avances en efectivo, juegos de azar y casino, pago de contribuciones, pago de IVA y todos los demás impuestos y derivados."},
			{item:"<br/>"},
			{item:"<strong>Tarifas:</strong>"},
			{item:"(1) Si se realiza 1 compra mensual, se obtiene 100% de descuento en el cobro de mantención. <br/>(2) Los porcentajes deben aplicar por el monto del avance o compra según corresponda.<br/>(3) Comisión aplica a cada transacción de avance en efectivo en chile. Tarifa válida a partir de 01 de diciembre de 2013 hasta 31 de diciembre de 2017. A partir de esta última fecha, aplica la tarifa precisada en el contrato del cliente. <br/>El Banco se reserva el derecho a modificarlas, conforme a las normas impartidas por la Superintendencia de Bancos. El cliente, en caso de no estar conforme con las comisiones informadas podrá poner término a su contrato. Este tarifado no aplica a Tarjetas Santander Banefe."}
		],
		tabs: [
			{
				name:"Beneficios Tarjetas",
				num_cols: "1",
				col1: [
					{tipo:"parrafo", content: "Programa de beneficios que acumula CochaPuntos por las compras realizadas con la Tarjeta de Crédito en Chile y en el extranjero. Los CochaPuntos acumulados sólo pueden ser canjeados por productos o servicios Cocha en sus oficinas. Las ofertas de viajes y servicios no bancarios son responsabilidad de la empresa que presta el servicio, no cabiéndole a Banco Santander Chile intervención alguna en ello ni en la ulterior atención que ellos demanden."},
					{tipo:"lista", content:[
						{item:"Acumula 1 CochaPunto por cada $100 de compras en establecimientos comerciales nacionales. (2)"},
						{item:"Acumula 25 CochaPuntos por cada US$10 de compras en establecimientos comerciales en el extranjero. (2)"}
					]}
				]			
			},
			{
				name:"Seguros y Servicios",
				num_cols:"1",
				col1:[
					{tipo:"titulo", content:"MasterCard Platinum:"},
					{tipo:"sub-titulo", content:"Servicio de Asistencia en Viajes: "},
					{tipo:"lista", content:[
						{item:"Asistencia médica al viajar a más de 160 kilómetros (100 millas) del lugar de residencia"},
						{item:"Disponible para el tarjetahabiente, el cónyuge e hijos dependientes"},
						{item:"Servicio de Asistencia de Viajes ayuda con <ul> <li>Información previa al viaje</li> <li>Información médica de emergencia</li> <li>Referencias medicas, farmacias, hospitales</li> <li>Información legal y referencias</li> <li>Transmisión de mensajes urgentes</span></li> <li>Avances de efectivo para fianzas legales</li> <li>Asistencia con pérdidas de equipaje</li></ul>"}
					]},
					{tipo:"sub-titulo", content:"Seguro arriendo de Autos."},
					{tipo:"lista", content:[
						{item:"Protección contra daños y pérdida (CDW/LDW) debido a choque, robo o acto de vandalismo a un auto alquilado"},
						{item:"Cubre hasta USD 75.000."},
						{item:"Cubre a los tarjetahabientes y aquellas personas designadas en el contrato de alquiler del vehículo como conductores autorizados."},
						{item:"El tarjetahabiente DEBE rechazar el seguro contra daños y pérdida (CDW/LDW) que le ofrece la compañía de alquiler de autos en el momento del alquiler"},
						{item:"El alquiler del vehículo debe ser cargado a su tarjeta MasterCard"}
					]},
					{tipo:"sub-titulo", content:"Seguro de Viajes"},
					{tipo:"lista", content:[
						{item:"Protección contra muerte accidental, desmembramiento o parálisis al viajar por tierra, aire o agua en un transporte comercial común."},
						{item:"Cubre hasta USD 500.000"},
						{item:"Cubre al tarjetahabiente, cónyuge y dependientes menores a 25 años. No necesitan estar viajando juntos"},
						{item:"El programa cubre: <ul> <li>Cualquier compañía comercial autorizada</li><li> Tanto viajes ida y vuelta como sencillos</li><li>Viajes domésticos e internacionales</li></ul>"},
						{item:"Los pasajes deben ser comprados con su Tarjeta MasterCard"}
					]},
					{tipo:"sub-titulo", content:"Master Assist Plus"},
					{tipo:"lista", content:[
						{item:"Proporciona asistencia médica de emergencia (accidente o enfermedad) cuando el tarjetahabiente está viajando fuera de su país de residencia"},
						{item:"Permite organizar un viaje de emergencia para un amigo o familiar, o la repatriación del tarjetahabiente con emergencia médica"},
						{item:"Cobertura es provista durante el viaje hasta un máximo de 31 días"},
						{item:"Cubre al titular, cónyugue e hijos dependientes menores a 25 años"}
					]},
					{tipo:"parrafo", content:"Para detalles sobre limitaciones, exclusiones, información detallada e iniciar proceso de reclamos por servicios o seguros MasterCard, debe llamar a:"},
					{tipo:"parrafo", content:"1-800-307-7309 sin cobro en USA o Canadá <br/>1-636-722-7111 cobro revertido."},
					{tipo:"parrafo", content:"Revisa la guía de beneficios MasterCard Platinum <a href='/tarjetas/nuestras-tarjetas/pdf/Guia_Beneficios_Mastercard_Platinum.pdf' target='_blank'>aquí.</a>"}
				]
			},
			{
				name:"Tarifas",
				num_cols: "table",
				orientation:"horizontal",
				vigencia:"Tarifa válida contratos celebrados a partir del 3 de marzo 2017.",
				tarjetas:[
					{mastercard: true, head:"MASTERCARD Platinum"},
					{visa: false, head:""},
					{american: false, head:""}
				],
				col1: [
					{item:"Modalidad de cobro",mastercard:"Vencido a todo evento",visa:"Vencido a todo evento",american:"Vencido a todo evento"},
					{item:"Comisión de mantención mensual para Cliente con Plan Multiproducto que contemple la tarjeta en mención.",mastercard:"UF 0",visa:"UF 0",american:"UF 0"},
					{item:"Comisión de mantención mensual para Cliente sin Plan Multiproducto que contemple la tarjeta en mención.",mastercard:"UF 0,3 mensual",visa:"UF 0,3 mensual",american:"UF 0,3 mensual"},
					{item:"Descuento de mantención por consumo (1)",mastercard:"1 Transacción de compra",visa:"1 Transacción de compra",american:"1 Transacción de compra"},
					{item:"Servicio de avance en efectivo nacional (3)",mastercard:"UF 0,22",visa:"UF 0,22",american:"UF 0,22"},
					{item:"Servicio de avance EN CUOTAS nacional (3)",mastercard:"UF 0,22",visa:"UF 0,22",american:"UF 0,22"},
					{item:"Servicio de avance en el extranjero (2)",mastercard:"2,5% + US$ 2,5",visa:"2,5% + US$ 2,5",american:"2,5% + US$ 2,5"},
					{item:"Servicio de súperavance",mastercard:"$9.990",visa:"$9.990",american:"$9.990"},
					{item:"Servicio de compra en cuotas",mastercard:"$0",visa:"$0",american:"$0"},
					{item:"Servicio de compra internacional (2)",mastercard:"2,50%",visa:"2,50%",american:"2,50%"},
					{item:"Servicio de avance y compra de divisas",mastercard:"UF 0,18",visa:"UF 0,18",american:"UF 0,18"},
					{item:"Servicio de aumento temporal de cupo por exceso",mastercard:"$0",visa:"$0",american:"$0"},
					{item:"Servicio de reemisión de tarjeta post bloqueo",mastercard:"No aplica",visa:"No aplica",american:"No aplica"},
					{item:"Servicio express de reemisión de tarjeta post bloqueo",mastercard:"UF 0,5",visa:"UF 0,5",american:"UF 0,5"}
				]
			},
			{
				name:"Requisitos y Condiciones",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
							{item:"Nacionalidad Chilena o Extranjero con residencia definitiva en el país."},
							{item:"Edad mínima 21 años."},
							{item:"Ingresos mensuales líquidos superiores a $400.000."},
							{item:"Buenos antecedentes comerciales."}
						] 
					},
					{tipo:"parrafo", content: "La aprobación está sujeta a la política comercial y de riesgo vigente."},
					{tipo:"parrafo", content:"Para acceder y operar dentro de las Políticas de Crédito de Banco Santander, es necesario que los antecedentes del cliente sean confiables, tengan un adecuado respaldo a través de la documentación mínima exigida, sean verificables cuando corresponda y contengan toda la información completa. Por consiguiente, si estás interesado en adquirir un producto crediticio deberás contar entre otros con:"},
					{tipo:"lista",content:[
						{item:"Una fuente regular, estable de ingresos y/o patrimonio suficiente para el pago del crédito solicitado."},
						{item:"No presentar morosidades o protestos vigentes."},
						{item:"Correcto comportamiento de pago con sus distintos acreedores."},
						{item:"Cumplir con la política definida."}
					]}
				]
			},
			{
				name:"Características Generales",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
							{item:"Se puede usar en más de 50.000 establecimientos comerciales a lo largo de Chile y en más de 12 millones en 87 países del mundo."},
							{item:"Recibirá mensualmente un Estado de Cuenta con el detalle de tus compras, pagos y puntos ganados."},
							{item:"Podrá realizar compras hasta en 60 cuotas en comercios asociados a transbank S.A"},
							{item:"Hacer tus compras en 3 cuotas precio contado en los establecimientos adheridos."},
							{item:"Tarjetas adicionales sin costo, quetambién acumula CochaPuntos"},
							{item:"Podrá realizar Avances en Efectivo y Súper Avances en Cuotas en la red de Cajeros Automáticos Redbanc o en cualquier sucursal del país."},
							{item:"Podrá solicitar Créditos con cargo en su Tarjeta, pagando hasta en 60 cuotas mensuales."},
							{item:"Pago Automático de Cuentas (PAT): Permite cargar tus cuentas de servicios (agua, luz, gas, etc.) en forma automática y pagarlas en una sola fecha todos los meses."},
							{item:"Disponible en Tarjeta MasterCard."}
						] 
					}
				]
			},
			{
				name:"Preguntas Frecuentes",
				num_cols: "acordeon",
				col1: [
					{
						title:"¿Cómo se acumulan los CochaPuntos?", 
						content: [
							{tipo:"lista", content: [
								{item:"Se acumula 1 CochaPunto por cada $100 de compras en establecimientos comerciales nacionales. (2)"},
								{item:"Se acumulan 25 CochaPuntos por cada US$10 de compras en establecimientos comerciales en el extranjero. (2)"}
							]}
						] 
					},
					{
						title:"Canje de puntos COCHA", 
						content: [
							{tipo:"importante", content: [
								{item:"Programa de beneficios que acumula CochaPuntos por las compras realizadas con la Tarjeta de Crédito en Chile y en el extranjero. Los CochaPuntos acumulados sólo pueden ser canjeados por productos o servicios Cocha en sus oficinas o a través de Contact Center."}
							]},
							{tipo:"lista",content:[
								{item:"Viaja en COCHA pagando con los puntos de tu Tarjeta Santander - COCHA"},
								{item:"Paga el total o parte de tu viaje con tus puntos. Válido solo para compras presenciales o a través del Contact Center. Válido solo para programas con pago en COCHA. No válido para servicios de viaje con pago en destino."},
								{item:"<strong>Contact Center:</strong> +56 2 2 464 1300"},
								{item:"<strong>Sucursales:</strong> <a target='_blank' href='http://www.cocha.com/sucursales'>http://www.cocha.com/sucursales</a>"}
							]}
						] 
					}	
				]
			}
		]
	},
	// COCHA GOLD
	{
		url:"cochagold",
		name:"Gold Santander Cocha",
		range: 1,
		min_renta:"400.000",
		max_renta:"699.999",
		featured: false,
		tipoTarjeta:"cocha",
		clasificacion:"viajes",
		idForm: "",
		onbording: false,
		title:"",
		bajada:"Programa de beneficios que acumula CochaPuntos por las compras realizadas con la Tarjeta de Crédito en Chile y en el extranjero.",
		imagen: "img/img-tarjetas/santander-cocha.png",
		link:"tarjetas/cochagold/index.asp",
		ver_mas:[
			{item:"Acumula 1 CochaPunto por cada $100 de compras en establecimientos comerciales nacionales. (2)"},
			{item:"Acumula 25 CochaPuntos por cada US$10 de compras en establecimientos comerciales en el extranjero. (2)"}
		],
		legales:[
			{item:"<strong>Beneficios:</strong>"},
			{item:"Las compras realizadas con las Tarjetas adicionales acumulan puntos para la cuenta del Titular. Si tienes más de una Tarjeta de Crédito Santander Cocha, las compras acumulan en una sola cuenta. (Rut titular) Para efectos de canje 1 Cocha Puntos equivale a $1 de descuento en productos y servicios Cocha. Todo lo que acumules te sirve para canjear con un mínimo de 10.000 Cocha Puntos. <br/>(2) Se excluyen las compras de cargo inmediato, bencina, avances en efectivo, juegos de azar y casino, pago de contribuciones, pago de IVA y todos los demás impuestos y derivados.<br/>(3) A partir del 01 de Septiembre de 2013 los Cocha Puntos que acumule desde ese mes en adelante, en su Tarjeta de Crédito Santander Cocha, tendrán una vigencia de 18 meses o hasta 3 meses después de terminado el programa, lo que primero se cumpla. Los puntos que hayan sido acumulados con anterioridad a esa fecha, tendrán una vigencia de 36 meses o hasta 3 meses después de terminado el programa, lo que primero se cumpla. Cada vez que Ud. canjee Puntos Cocha, el canje se imputará a sus puntos más antiguos."},
			{item:"<br/>"},
			{item:"<strong>Tarifas</strong>"},
			{item:"(1) Si se realiza 1 compra mensual, se obtiene 100% de descuento en el cobro de mantención.<br/>(2) Los porcentajes deben aplicar por el monto del avance o compra según corresponda.<br/>(3) Comisión aplica a cada transacción de avance en efectivo en chile. Tarifa válida a partir de 01 de diciembre de 2013 hasta 31 de diciembre de 2017. A partir de esta última fecha, aplica la tarifa precisada en el contrato del cliente. <br/>El Banco se reserva el derecho a modificarlas, conforme a las normas impartidas por la Superintendencia de Bancos. El cliente, en caso de no estar conforme con las comisiones informadas podrá poner término a su contrato. Este tarifado no aplica a Tarjetas Santander Banefe."}
		],
		tabs: [
			{
				name:"Beneficios Tarjetas",
				num_cols: "1",
				col1: [
					{tipo:"parrafo", content: "Programa de beneficios que acumula CochaPuntos por las compras realizadas con la Tarjeta de Crédito en Chile y en el extranjero. Los CochaPuntos acumulados sólo pueden ser canjeados por productos o servicios Cocha en sus oficinas. Las ofertas de viajes y servicios no bancarios son responsabilidad de la empresa que presta el servicio, no cabiéndole a Banco Santander Chile intervención alguna en ello ni en la ulterior atención que ellos demanden."},
					{tipo:"lista", content:[
						{item:"Acumula 1 CochaPunto por cada $100 de compras en establecimientos comerciales nacionales. (2)"},
						{item:"Acumula 25 CochaPuntos por cada US$10 de compras en establecimientos comerciales en el extranjero. (2)"},
						{item:"Los CochaPuntos tienen una vigencia de 18 meses a contar del mes en que fueron abonados en la cuenta del usuario. (3)"}
					]}
				]
			},
			{
				name:"Seguros y Servicios",
				num_cols: "1",
				col1:[
					{tipo:"titulo", content:"MasterCard Gold:"},
					{tipo:"sub-titulo", content:"Servicio de Asistencia en Viajes:"},
					{tipo:"lista", content:[
						{item:"Asistencia médica al viajar a más de 160 kilómetros (100 millas) del lugar de residencia"},
						{item:"Disponible para el tarjetahabiente, el cónyuge e hijos dependientes"},
						{item:"Servicio de Asistencia de Viajes ayuda con <ul> </li> Información previa al viaje</li><li>Información médica de emergencia</li><li>Referencias medicas, farmacias, hospitales</li><li>Información legal y referencias</li><li>Transmisión de mensajes urgentes</li><li>Avances de efectivo para fianzas legales</li><li>Asistencia con pérdidas de equipaje</li></ul>"}
					]},
					{tipo:"sub-titulo", content:"Seguro arriendo de Autos."},
					{tipo:"lista", content:[
						{item:"Protección contra daños y pérdida (CDW/LDW) debido a choque, robo o acto de vandalismo a un auto alquilado"},
						{item:"Cubre hasta USD 50.000."},
						{item:"Cubre a los tarjetahabientes y aquellas personas designadas en el contrato de alquiler del vehículo como conductores autorizados."},
						{item:"El tarjetahabiente DEBE rechazar el seguro contra daños y pérdida (CDW/LDW) que le ofrece la compañía de alquiler de autos en el momento del alquiler"},
						{item:"El alquiler del vehículo debe ser cargado a su tarjeta MasterCard"}
					]},
					{tipo:"sub-titulo", content:"Seguro de Viajes"},
					{tipo:"lista", content:[
						{item:"Protección contra muerte accidental, desmembramiento o parálisis al viajar por tierra, aire o agua en un transporte comercial común."},
						{item:"Cubre hasta USD 250.000"},
						{item:"Cubre al tarjetahabiente, cónyuge y dependientes menores a 25 años. No necesitan estar viajando juntos"},
						{item:"El programa cubre: <ul><li>Cualquier compañía comercial autorizada</li><li>Tanto viajes ida y vuelta como sencillos</li><li>Viajes domésticos e internacionales</li></ul>"},
						{item:"Los pasajes deben ser comprados con su Tarjeta MasterCard"}
					]},
					{tipo:"parrafo", content:"<br/><br/>"},
					{tipo:"sub-titulo", content:"<strong>Garantía Extendida</strong>"},
					{tipo:"parrafo", content:"La Cobertura de la Garantía Extendida duplica los términos de Garantía del fabricante original o la Garantía de marca de la tienda hasta un año completo para la mayoría de los artículos que usted compre con su Tarjeta de Crédito MasterCard Gold Santander Cocha*. Cobertura: Los montos máximos de beneficio son de US$200 por incidente, sujeto a un total de US$400, por un período de doce meses."},
					{tipo:"sub-titulo", content:"<strong>Protección de Compras</strong>"},
					{tipo:"parrafo", content:"El beneficio Protección de Compras aplica exclusivamente para compras realizadas en el país de residencia. Con su Tarjeta de Crédito usted puede comprar confiado, sabiendo que la mayoría de las compras que usted haga con su tarjeta pueden estar protegidas en caso de hurto o daño accidental, durante los primeros 45 días posteriores a la fecha de compra (indicada en el recibo de la tienda). Cobertura: Los montos máximos de beneficio son de US$200 por incidente, sujeto a un total de US$400, por un período de doce meses.(*) Una Compra con cobertura debe tener un período mínimo de Garantía de tres meses, sin exceder un período máximo de garantía de tres años."},
					{tipo:"parrafo", content:"Para detalles sobre limitaciones, exclusiones, información detallada e iniciar proceso de reclamos por servicios o seguros MasterCard, debe llamar a:<br/>1-800-307-7309 sin cobro en USA o Canadá <br/>1-636-722-7111 cobro revertido."},
					{tipo:"parrafo", content:"Revisa la guía de beneficios MasterCard Gold <a href='/tarjetas/nuestras-tarjetas/pdf/Guia_Beneficios_Mastercard_Gold_Santander.pdf' target='_blank'>aquí</a>."}
				]
			},
			{
				name:"Tarifas",
				num_cols: "table",
				orientation:"horizontal",
				vigencia:"Tarifa válida contratos celebrados a partir del 3 de marzo 2017.",
				tarjetas:[
					{mastercard: true, head:"MASTERCARD Gold"},
					{visa: false, head:""},
					{american: false, head:""}
				],
				col1: [
					{item:"Modalidad de cobro",mastercard:"Vencido a todo evento",visa:"Vencido a todo evento",american:"Vencido a todo evento"},
					{item:"Comisión de mantención mensual para Cliente con Plan Multiproducto que contemple la tarjeta en mención.",mastercard:"UF 0",visa:"UF 0",american:"UF 0"},
					{item:"Comisión de mantención mensual para Cliente sin Plan Multiproducto que contemple la tarjeta en mención.",mastercard:"UF 0,2 mensual",visa:"UF 0,2 mensual",american:"UF 0,2 mensual"},
					{item:"Descuento de mantención por consumo (1)",mastercard:"1 Transacción de compra",visa:"1 Transacción de compra",american:"1 Transacción de compra"},
					{item:"Servicio de avance en efectivo nacional (3)",mastercard:"UF 0,22",visa:"UF 0,22",american:"UF 0,22"},
					{item:"Servicio de avance EN CUOTAS nacional (3)",mastercard:"UF 0,22",visa:"UF 0,22",american:"UF 0,22"},
					{item:"Servicio de avance en el extranjero (2)",mastercard:"US$ 12",visa:"US$ 12",american:"US$ 12"},
					{item:"Servicio de súperavance",mastercard:"$12.990",visa:"$12.990",american:"$12.990"},
					{item:"Servicio de compra en cuotas",mastercard:"$0",visa:"$0",american:"$0"},
					{item:"Servicio de compra internacional (2)",mastercard:"3,50%",visa:"3,50%",american:"3,50%"},
					{item:"Servicio de avance y compra de divisas",mastercard:"UF 0,18",visa:"UF 0,18",american:"UF 0,18"},
					{item:"Servicio de aumento temporal de cupo por exceso",mastercard:"$0",visa:"$0",american:"$0"},
					{item:"Servicio de reemisión de tarjeta post bloqueo",mastercard:"No aplica",visa:"No aplica",american:"No aplica"},
					{item:"Servicio express de reemisión de tarjeta post bloqueo",mastercard:"UF 0,5",visa:"UF 0,5",american:"UF 0,5"}
				]
			},
			{
				name:"Requisitos y Condiciones",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
							{item:"Nacionalidad Chilena o Extranjero con residencia definitiva en el país."},
							{item:"Edad mínima 21 años."},
							{item:"Ingresos mensuales líquidos superiores a $400.000."},
							{item:"Buenos antecedentes comerciales."}
						] 
					},
					{tipo:"parrafo", content: "La aprobación está sujeta a la política comercial y de riesgo vigente."},
					{tipo:"parrafo", content: "Para acceder y operar dentro de las Políticas de Crédito de Banco Santander, es necesario que los antecedentes del cliente sean confiables, tengan un adecuado respaldo a través de la documentación mínima exigida, sean verificables cuando corresponda y contengan toda la información completa. Por consiguiente, si estás interesado en adquirir un producto crediticio deberás contar entre otros con:"},
					{tipo:"lista", content: [
						{item:"Una fuente regular, estable de ingresos y/o patrimonio suficiente para el pago del crédito solicitado."},
						{item:"No presentar morosidades o protestos vigentes."},
						{item:"Correcto comportamiento de pago con sus distintos acreedores."},
						{item:"Cumplir con la política definida."}
					]}
				]
			},
			{
				name:"Características Generales",
				num_cols: "2",
				col1: [
					{tipo:"lista", content: [
							{item:"Se puede usar en más de 50.000 establecimientos comerciales a lo largo de Chile y en más de 12 millones en 87 países del mundo."},
							{item:"Recibirá mensualmente un Estado de Cuenta con el detalle de tus compras, pagos y puntos ganados."},
							{item:"Podrá realizar compras hasta en 60 cuotas en comercios asociados a transbank S.A"},
							{item:"Hacer tus compras en 3 cuotas precio contado en los establecimientos adheridos."},
							{item:"Tarjetas adicionales sin costo, quetambién acumula CochaPuntos"}
						] 
					}
				],
				col2: [
					{tipo:"lista", content:[
							{item:"Podrá realizar Avances en Efectivo y Súper Avances en Cuotas en la red de Cajeros Automáticos Redbanc o en cualquier sucursal del país."},
							{item:"Podrá solicitar Créditos con cargo en su Tarjeta, pagando hasta en 60 cuotas mensuales."},
							{item:"Pago Automático de Cuentas (PAT): Permite cargar tus cuentas de servicios (agua, luz, gas, etc.) en forma automática y pagarlas en una sola fecha todos los meses."},
							{item:"Disponible en Tarjeta MasterCard."}
						] 
					}
				]
			},
			{
				name:"Preguntas Frecuentes",
				num_cols: "acordeon",
				col1: [
					{
						title:"¿Cómo se acumulan los CochaPuntos?", 
						content: [
							{tipo:"lista", content: [
								{item:"Se acumula 1 CochaPunto por cada $100 de compras en establecimientos comerciales nacionales. (2)"},
								{item:"Se acumulan 25 CochaPuntos por cada US$10 de compras en establecimientos comerciales en el extranjero. (2)"}
							]},
							{tipo:"parrafo",content:"Adicionalmente los CochaPuntos acumulados son informados mensualmente a través del Estado de Cuenta."}
						] 
					},
					{
						title:"¿Cómo canjear los CochaPuntos?", 
						content: [
							{tipo:"parrafo", content: "El canje de los CochaPuntos por productos o servicios SÓLO podrá realizarse en oficinas Cocha o al teléfono: 02-24641000."}
						]
					},	
					{
						title:"Canje de puntos COCHA", 
						content: [
							{tipo:"importante", content: [
								{item:"Programa de beneficios que acumula CochaPuntos por las compras realizadas con la Tarjeta de Crédito en Chile y en el extranjero. Los CochaPuntos acumulados sólo pueden ser canjeados por productos o servicios Cocha en sus oficinas o a través de Contact Center."}
							]},
							{tipo:"lista",content:[
								{item:"Viaja en COCHA pagando con los puntos de tu Tarjeta Santander - COCHA"},
								{item:"Paga el total o parte de tu viaje con tus puntos. Válido solo para compras presenciales o a través del Contact Center. Válido solo para programas con pago en COCHA. No válido para servicios de viaje con pago en destino."},
								{item:"<strong>Contact Center:</strong> +56 2 2 464 1300"},
								{item:"<strong>Sucursales:</strong> <a target='_blank' href='http://www.cocha.com/sucursales'>http://www.cocha.com/sucursales</a>"}
							]}
						] 
					}
				]
			}
		]
	},
	// COMUNIDAD MUJER
	{
		url:"comunidadmujer",
		name:"Comunidad Mujer",
		range: 1,
		min_renta:"400.000",
		max_renta:"699.999",
		featured: false,
		tipoTarjeta:"lanpass",
		clasificacion:"viajes",
		idForm: "",
		onbording: false,
		title:"",
		bajada:"Al obtener Tarjeta de Crédito Santander Comunidad Mujer LATAM Pass, automáticamente se es parte del exclusivo programa de pasajeros frecuentes de LATAM, LATAM Pass y acumulas KMS. LATAM Pass al viajar en LATAM y otras líneas aéreas asociadas la Alianza Oneworld. Con su Tarjeta de Crédito Santander Comunidad Mujer, podrá acumular KMS. LATAM Pass para volar antes de lo que esperaba.",
		imagen: "img/img-tarjetas/santander-comunidadmujer.png",
		link:"tarjetas/comunidadmujer/index.asp",
		ver_mas:[
			{item:"Se puede usar en más de 50.000 establecimientos comerciales a lo largo de Chile."},
			{item:"Planificación de compra con el sistema de cuotas fijas."}
		],
		legales:[
			{item:"<strong>Beneficios</strong>"},
			{item:"Los beneficios no financieros del Programa Santander LATAM Pass rigen hasta el 31 de diciembre de 2017. Programa LATAM Pass y todos los beneficios LATAM Pass asociados a la tarjeta son de exclusiva responsabilidad de LATAM AIRLINES GROUP S.A., no cabiéndole a Banco Santander Chile responsabilidad alguna en ello ni en la ulterior atención que ello demande.<br/>(1) Acumula 1,5 KMS. LATAM Pass por cada dólar gastado en Chile o en el extranjero con la Tarjeta. Se excluyen las siguientes operaciones con Tarjeta de Crédito y/o Redcompra Santander LATAM Pass: compras de cargo inmediato (avances en efectivo, compras en casinos y juegos de azar), compra de combustibles, pago de impuestos en general, notas de débito y/o crédito, así como cargo por intereses o cargos por parte del Banco (comisiones). Acumulación de kilómetros LATAM Pass en cada período mensual de facturación relacionados a compras y pagos efectuados en pesos o moneda extranjera con la Tarjeta de Crédito Santander LATAM Pass, opera hasta el monto del respectivo cupo nacional o internacional autorizado por el Banco para la tarjeta a la fecha del estado de cuenta. Los KMS. LATAM Pass acumulados se verán reflejados en la cuenta del titular LATAM Pass al mes siguiente o subsiguiente de realizadas las compras.<br/>(2) Conozca los términos y condiciones de Multiplica, comercios adheridos, beneficio y vigencia de la adhesión de cada comercio en www.lan.com/multiplica. El Programa LATAM Pass, Multiplica y el abono y canje de Kilómetros LATAM Pass son responsabilidad de LATAM AIRLINES GROUP S.A., sin que corresponda a Banco Santander Chile intervención en ello. Revise términos y condiciones aquí."},
			{item:"<br/>"},
			{item:"<strong>Tarifas</strong>"},
			{item:"(1) Los porcentajes deben aplicar por el monto del avance o compra según corresponda.<br/>(2) Comisión aplica a cada transacción de avance en efectivo en chile. Tarifa válida a partir de 01 de diciembre de 2013 hasta 31 de diciembre de 2017. A partir de esta última fecha, aplica la tarifa precisada en el contrato del cliente. <br/>El Banco se reserva el derecho a modificarlas, conforme a las normas impartidas por la Superintendencia de Bancos. El cliente, en caso de no estar conforme con las comisiones informadas podrá poner término a su contrato. Este tarifado no aplica a Tarjetas Santander Banefe."},
			{item:"<br/>"},
			{item:"<strong>Preguntas Frecuentes</strong>"},
			{item:"(1) Se excluyen las siguientes operaciones con Tarjeta de Crédito LATAM Pass: compras de cargo inmediato (avances en efectivo, compras en casinos y juegos de azar), compra de combustibles, pago de impuestos en general (contribuciones, IVA, etc), notas de débito y/o crédito, así como cargos por intereses o cargos por parte del Banco (comisiones). Acumulación de kilómetros LATAM Pass en cada período mensual de facturación relacionados a compras y pagos efectuados en pesos o moneda extranjera con la Tarjeta de Crédito Santander LATAM Pass, opera hasta el monto del respectivo cupo nacional o internacional autorizado por el Banco para la tarjeta a la fecha del estado de cuenta.<br/>(2) Beneficio exclusivo para clientes de Tarjetas de Crédito LATAM Pass que posean la Tarjeta Redcompra Santander. Se bonifican las compras realizadas en establecimientos comerciales adheridos a Transbank S.A. Se excluyen compras de combustible, casinos, juegos de azar y pagos de impuesto en general, los que no generan kilómetros LATAM Pass. Se excluyentambién los giros en cajeros automáticos Redbanc. Los kilómetros acumulados se verán reflejados en la cuenta del titular LATAM Pass al mes siguiente o subsiguiente de realizadas las compras. Los beneficios del programa LATAM Pass son de exclusiva responsabilidad de LATAM AIRLINES GROUP S.A., no cabiéndole a Banco Santander Chile responsabilidad alguna en ello ni en la ulterior atención que ello demande.<br/>(3) En tarifas, rutas y fechas limitadas que permitan la acumulación de kilómetros LATAM Pass."}
		],
		tabs: [
			{
				name:"Beneficios Tarjetas",
				num_cols: "1",
				col1: [
					{tipo:"lista", content:[
						{item:"Acumulación de 1,5 KMS. LATAM Pass por dólar gastado en todas las compras en Chile y el extranjero. (1)"},
						{item:"Acumulará 0,5 kms. por dólar gastado en compras realizadas con la Tarjeta de Débito (Redcompra) en Chile y en el extranjero. (1)"},
						{item:"Los kilómetros acumulados pueden ser canjeados por pasajes aéreos en LATAM y en las líneas aéreas asociadas a la alianza Oneworld."},
						{item:"La acumulación de KMS. LATAM Pass en cada período mensual de facturación opera hasta el monto del respectivo cupo nacional e internacional autorizado por el Banco para cada tarjeta. Esto aplica para todas las compras y pagos realizados en pesos y/o moneda extranjera en cada periodo."},
						{item:"Los abonos que se efectúen durante el período mensual de facturación, aunque confieran nuevas disponibilidades sobre los cupos autorizados, no habilitan la acumulación de mayor número de KMS. LATAM Pass."},
						{item:"Apertura de Tarjeta: 5.000 kms. de regalo. Se abonarán al mes siguiente de la primera compra."},
						{item:"Cargo automático de la membresía de Comunidad Mujer: 1.000 kms. de regalo."},
						{item:"Los kilómetros acumulados pueden ser canjeados por pasajes aéreos en LATAM y en las líneas aéreas asociadas a la alianza Oneworld."},
						{item:"Mediante la Tarjeta Santander Comunidad Mujer podrás obtener un descuento de un 10% en la cuota anual de Comunidad Mujer y en el valor de los Seminarios, Cursos y Talleres organizados por dicha corporación."},
						{item:"<strong>Multiplica tus KMS LATAM Pass.</strong> Todas tus compras con Tarjetas de Crédito Santander LATAM Pass, en tiendas adheridas, multiplicarán los kms. que acumulas (2). Revisa las tiendas adheridas <a target='_blank' href='http://www.lan.com/multiplica'>aquí</a>"}
					]},
				]
			},
			{
				name:"Seguros y Servicios",
				num_cols: "servicios",
				pdf:"",
				col1:[
					{
						tabs:[
							{name:"MasterCard", content:[
								{name:"Servicios", content:[
									{item:"Mastercard Specials, acceso a descuentos y beneficios exclusivos"},
									{item:"Alerta de Gastos."}
								]},
								{name:"Seguros", content:[
									{item:"Garantía extendida (El monto del beneficio máximo es de hasta USD 200 por incidente, sujeto a un máximo de USD 400 por Cuenta por un periodo de doce (12) meses)."},
									{item:"Protección de Compras (El monto del beneficio máximo es de hasta USD200 por incidente, sujeto a un máximo de USD400 por Cuenta por un periodo de doce (12) meses)."},
									{item:"Master Card Global Service:<ul><li>1. Reporte de Tarjeta Perdida</li><li>2. Reemplazo de Emergencia de la Tarjeta</li><li>3. Adelanto de Efectivo de Emergencia</li></ul>"}
								]}
							]}
						]
					}
				]
			},
			{
				name:"Tarifas",
				num_cols: "table",
				orientation:"horizontal",
				vigencia:"Tarifa válida contratos celebrados a partir del 3 de marzo 2017.",
				tarjetas:[
					{mastercard: true, head:"MASTERCARD Gold Comunidad Mujer"},
					{visa: false, head:""},
					{american: false, head:""}
				],
				col1: [
					{item:"Servicio de compra en cuotas",mastercard:"$0",visa:"$0",american:"$0"},
					{item:"Servicio de aumento temporal de cupo por exceso",mastercard:"$0",visa:"$0",american:"$0"},
					{item:"Comisión de mantención mensual para Cliente con Plan Multiproducto que contemple la tarjeta en mención.",mastercard:"UF 0",visa:"UF 0",american:"UF 0"},
					{item:"Comisión de mantención mensual para Cliente sin Plan Multiproducto que contemple la tarjeta en mención.",mastercard:"UF 0,14 mensual",visa:"UF 0,14 mensual",american:"UF 0,14 mensual"},
					{item:"Descuento del 100% de manutención sobre cuota semestral, por consumo",mastercard:"No Aplica",visa:"No Aplica",american:"No Aplica"},
					{item:"Modalidad de cobro",mastercard:"Vencido a todo evento",visa:"Vencido a todo evento",american:"Vencido a todo evento"},
					{item:"Servicio de avance en efectivo nacional (2)",mastercard:"UF 0,05",visa:"UF 0,05",american:"UF 0,05"},
					{item:"Servicio de avance EN CUOTAS nacional (2)",mastercard:"UF 0,05",visa:"UF 0,05",american:"UF 0,05"},
					{item:"Servicio de avance en el extranjero (1)",mastercard:"2% + US$ 2,5",visa:"2% + US$ 2,5",american:"2% + US$ 2,5"},
					{item:"Servicio de súperavance",mastercard:"$0",visa:"$0",american:"$0"},
					{item:"Servicio de compra internacional (1)",mastercard:"2%",visa:"2%",american:"2%"},
					{item:"Servicio de avance y compra de divisas",mastercard:"$0",visa:"$0",american:"$0"},
					{item:"Servicio de remisión de tarjeta post bloqueo",mastercard:"No Aplica",visa:"No Aplica",american:"No Aplica"},
					{item:"Servicio express de remisión de tarjeta post bloqueo",mastercard:"UF 0,5",visa:"UF 0,5",american:"UF 0,5"}
				]
			},
			{
				name:"Requisitos y Condiciones",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
						{item:"Nacionalidad Chilena o Extranjero con residencia definitiva en el país."},
						{item:"Edad mínima 21 años."},
						{item:"Ingresos mensuales líquidos superiores a $400.000."},
						{item:"Buenos antecedentes comerciales."},
						{item:"La aprobación está sujeta a la política comercial y de riesgo vigente."}
					]},
					{tipo:"parrafo", content: "Para acceder y operar dentro de las Políticas de Crédito de Banco Santander , es necesario que los antecedentes del cliente sean confiables, tengan un adecuado respaldo a través de la documentación mínima exigida, sean verificables cuando corresponda y contengan toda la información completa. Por consiguiente, si estás interesado en adquirir un producto crediticio deberás contar entre otros con:"},
					{tipo:"lista", content:[
						{item:"Una fuente regular, estable de ingresos y/o patrimonio suficiente para el pago del crédito solicitado."},
						{item:"No presentar morosidades o protestos vigentes."},
						{item:"Correcto comportamiento de pago con sus distintos acreedores."},
						{item:"Cumplir con la política definida."},
						{item:"Para acceder a esta tarjeta es requisito ser socia de la Comunidad Mujer. <a target='_blank' href='http://www.comunidadmujer.cl/'>Hágase socia aquí.</a>"}
					]}
				]
			},
			{
				name:"Características Generales",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
							{item:"Se puede usar en más de 50.000 establecimientos comerciales a lo largo de Chile y en más de 12 millones en 87 países del mundo."},
							{item:"Recibirás mensualmente un Estado de Cuenta con el detalle de tus compras, pagos y premios ganados."},
							{item:"Planificación de compra con el sistema de cuotas fijas."},
							{item:"Hacer tus compras en 3 cuotas precio contado en los establecimientos adheridos."},
							{item:"Tarjetas adicionales sin costo."},
							{item:"Pago Automático de Cuentas (PAT): Permite cargar tus cuentas de servicios (agua, luz, gas, etc.) en forma automática y pagarlas en una sola fecha todos los meses."},
							{item:"Permite realizar avances de dinero en efectivo en cajeros automáticos, Internet o directamente en nuestras sucursales."},
							{item:"Descuentos especiales en restaurantes y tiendas exclusivas <a href='https://mov.santander.cl/beneficios?segmento=s-personas' target='_blank'>Ver Beneficios</a>"}
						] 
					}
				]
			},
			{
				name:"Preguntas Frecuentes",
				num_cols: "acordeon",
				col1: [
					{
						title:"¿Qué es el programa LATAM PASS?", 
						content: [
							{tipo:"parrafo", content: "Programa de beneficios que acumula Kilómetros LATAM Pass en el programa Pasajero Frecuente LATAM Pass por las compras realizadas con la Tarjeta de Crédito en Chile y en el extranjero y con la Tarjeta Redcompra Santander. Los kilómetros acumulados pueden ser canjeados por pasajes aéreos en LATAM y en las líneas aéreas asociadas a la alianza oneworld."}
						] 
					},
					{
						title:"¿Cómo se acumulan kilómetros?", 
						content: [
							{tipo:"sub-titulo", content: "Por utilización de Tarjetas de Crédito LATAM Pass y Tarjeta Redcompra Santander:"},
							{tipo:"lista", content:[
								{item:"1,5 KMS. LATAM Pass por cada dólar gastado en Chile o en el extranjero con la Tarjeta de Crédito LATAM Pass Santander(1)."},
								{item:"0,5 KMS. LATAM Pass por cada dólar gastado en Chile con la Tarjeta Redcompra Santander (2)."}
							]},
							{tipo:"sub-titulo",content:"Por vuelos:"},
							{tipo:"lista", content:[
								{item:"Tú acumulas kilómetros (3) cada vez que vuelas en LATAM, en las líneas aéreas integrantes de oneworld y en las líneas aéreas asociadas a LATAM Pass. Puedes canjear estos kilómetros por pasajes gratis a más de 570 destinos alrededor del mundo. Actualmente, las líneas aéreas integrantes de la alianza oneworld son: LATAM, American Airlines, British Airways, Cathay Pacific, Finnair, Iberia, JAL, Malev, Qantas y Royal Jordanian."}
							]}
						] 
					},
					{
						title:"¿Dónde consultar sus kilómetros?", 
						content: [
							{tipo:"lista", content: [
								{item:"En cualquier oficina LATAM, o en el teléfono 600-526-2000"},
								{item:"En www.latam.com, ingresando nombre de usuario y clave"},
								{item:"Adicionalmente, los kilómetros acumulados son informados mensualmente a través del Estado de Cuenta."}
							]}
						] 
					},
					{
						title:"¿Cual es la vigencia de los Kilómetros?", 
						content: [
							{tipo:"parrafo", content: "Los Kilómetros originados por compras de Tarjetas LATAM Pass tendrán vigencia hasta el 31 de diciembre del año subsiguiente a la fecha de su generación. En caso de acumular 12.000 kms. o más con el uso de sus Tarjetas Santander LATAM Pass entre Diciembre del año previo y Noviembre del año en que se verifica la definición , se renovará el saldo completo de sus kms por 36 meses."}
						] 
					}	
				]
			}
		]
	},
	// FOREVER SANTANDER
	{
		url:"foreversantander",
		name:"Forever Santander LATAM Pass",
		range: 1,
		min_renta:"400.000",
		max_renta:"699.999",
		featured: false,
		tipoTarjeta:"lanpass",
		clasificacion:"viajes",
		idForm: "",
		onbording: false,
		title:"Una tarjeta para toda la vida. ",
		bajada:"Al obtener Tarjeta de Crédito Forever Santander LATAM Pass, automáticamente se es parte del exclusivo programa de pasajeros frecuentes de LATAM, LATAM Pass y acumulas KMS. LATAM Pass al viajar en LATAM y otras líneas aéreas asociadas la Alianza Oneworld. Con su Tarjeta de Crédito Forever Santander, podrá acumular KMS. LATAM Pass para volar antes de lo que esperaba.",
		imagen: "img/img-tarjetas/santander-forever.png",
		link:"tarjetas/foreversantander/index.asp",
		ver_mas:[
			{item:"Una tarjeta para toda la vida."},
			{item:"Acumula KMS LATAM Pass por compras con tu Tarjeta de Crédito."}
		],
		legales:[
			{item:"<strong>Beneficios:</strong>"},
			{item:"Los beneficios no financieros del Programa Santander LATAM Pass rigen hasta el 31 de diciembre de 2017. Programa LATAM Pass y todos los beneficios LATAM Pass asociados a la tarjeta son de exclusiva responsabilidad de LATAM AIRLINES GROUP S.A., no cabiéndole a Banco Santander Chile responsabilidad alguna en ello ni en la ulterior atención que ello demande.<br/>"},
			{item:"(1) Acumula 1,5 KMS. LATAM Pass por cada dólar gastado en Chile o en el extranjero con la Tarjeta. Se excluyen las siguientes operaciones con Tarjeta de Crédito y/o Redcompra Santander LATAM Pass: compras de cargo inmediato (avances en efectivo, compras en casinos y juegos de azar), compra de combustibles, pago de impuestos en general, notas de débito y/o crédito, así como cargo por intereses o cargos por parte del Banco (comisiones). Acumulación de kilómetros LATAM Pass en cada período mensual de facturación relacionados a compras y pagos efectuados en pesos o moneda extranjera con la Tarjeta de Crédito Santander LATAM Pass, opera hasta el monto del respectivo cupo nacional o internacional autorizado por el Banco para la tarjeta a la fecha del estado de cuenta. Los KMS. LATAM Pass acumulados se verán reflejados en la cuenta del titular LATAM Pass al mes siguiente o subsiguiente de realizadas las compras.<br/>"},
			{item:"(2) En estos rubros, según clasificación Transbank, duplicará la acumulación normal de KMS. LATAM Pass comprando con Tarjeta de Crédito Forever Santander LATAM Pass.<br/>"},
			{item:"(3) Descuento aplica para todas las tarifas en KMS. LATAM Pass para todos los canjes realizados por pasajes en rutas dentro de Chile, excluido Isla de Pascua, con viaje iniciado y terminado entre el 1° de marzo y el 15 de diciembre de cada año, ambas fechas inclusive, excluyendo temporada alta. Para canjes realizados en LATAM.com, el descuento se efectuará al momento del canje. Para canjes en Call Center de LATAM, oficinas LATAM y agencias de viaje, se realizará un contracargo de kms. en el estado de cuenta LATAM Pass del cliente, correspondiente al descuento, a más tardar 30 días luego de efectuado el canje.<br/>"},
			{item:"(4) El acceso a los salones Pacific Club y la calidad del servicio es de exclusiva responsabilidad de Servicios Aeroportuarios S.A., sin responsabilidad ni injerencia alguna para Banco Santander Chile ni LATAM AIRLINES GROUP S.A. en ello ni en la ulterior atención que ello demande.<br/>"},
			{item:"(5) Tarjeta de Crédito Forever Santander LATAM Pass, incluye sin costo para el cliente, el Súper Seguro Fraude Plus con cobertura de hasta UF 55, Límite máximo anual combinado. Las características, condiciones y exclusiones se rigen según la POL 1 06 053 Art (1-b). El riesgo es cubierto por Santander Seguros.<br/>"},
			{item:"(6) Conozca los términos y condiciones de Multiplica, comercios adheridos, beneficio y vigencia de la adhesión de cada comercio en www.lan.com/multiplica. El Programa LATAM Pass, Multiplica y el abono y canje de Kilómetros LATAM Pass son responsabilidad de LATAM AIRLINES GROUP S.A., sin que corresponda a Banco Santander Chile intervención en ello. Revise términos y condiciones aquí."},
			{item:"<br/>"},
			{item:"<strong>Seguros y Servicios:</strong>"},
			{item:"Para detalles sobre limitaciones, exclusiones, información detallada e iniciar proceso de reclamos por servicios o seguros MasterCard, debe llamar a:1-800-307-7309 sin cobro en USA o Canadá1-636-722-7111 cobro revertido."},
			{item:"(5) Tarjeta de Crédito Forever Santander LATAM Pass, incluye sin costo para el cliente, el Súper Seguro Fraude Plus con cobertura de hasta UF 55, Límite máximo anual combinado. Las características, condiciones y exclusiones se rigen según la POL 1 06 053 Art (1-b). El riesgo es cubierto por Santander Seguros Generales S.A. Intermedia Santander Corredora de Seguros Ltda.<br/>(6) Los seguros y servicios asociados son de exclusiva responsabilidad de MasterCard Internacional, sin responsabilidad para Banco Santander Chile. Consulte sobre los términos y condiciones particulares de cada seguro o servicio en las oficinas de Banco Santander."},
			{item:"<br/>"},
			{item:"<strong>Tarifas:</strong>"},
			{item:"(1) Los porcentajes deben aplicar por el monto del avance o compra según corresponda.<br/>(2) Comisión aplica a cada transacción de avance en efectivo en chile. Tarifa válida a partir de 01 de diciembre de 2013 hasta 31 de diciembre de 2017. A partir de esta última fecha, aplica la tarifa precisada en el contrato del cliente. <br/>El Banco se reserva el derecho a modificarlas, conforme a las normas impartidas por la Superintendencia de Bancos. El cliente, en caso de no estar conforme con las comisiones informadas podrá poner término a su contrato. Este tarifado no aplica a Tarjetas Santander Banefe."},
			{item:"<br/>"},
			{item:"<strong>Preguntas Frecuentes:</strong>"},
			{item:"(1) Se excluyen las siguientes operaciones con Tarjeta de Crédito LATAM Pass: compras de cargo inmediato (avances en efectivo, compras en casinos y juegos de azar), compra de combustibles, pago de impuestos en general (contribuciones, IVA, etc), notas de débito y/o crédito, así como cargos por intereses o cargos por parte del Banco (comisiones). Acumulación de kilómetros LATAM Pass en cada período mensual de facturación relacionados a compras y pagos efectuados en pesos o moneda extranjera con la Tarjeta de Crédito Santander LATAM Pass, opera hasta el monto del respectivo cupo nacional o internacional autorizado por el Banco para la tarjeta a la fecha del estado de cuenta.<br/>(2) Beneficio exclusivo para clientes de Tarjetas de Crédito LATAM Pass que posean la Tarjeta Redcompra Santander. Se bonifican las compras realizadas en establecimientos comerciales adheridos a Transbank S.A. Se excluyen compras de combustible, casinos, juegos de azar y pagos de impuesto en general, los que no generan kilómetros LATAM Pass. Se excluyentambién los giros en cajeros automáticos Redbanc. Los kilómetros acumulados se verán reflejados en la cuenta del titular LATAM Pass al mes siguiente o subsiguiente de realizadas las compras. Los beneficios del programa LATAM Pass son de exclusiva responsabilidad de LATAM AIRLINES GROUP S.A., no cabiéndole a Banco Santander Chile responsabilidad alguna en ello ni en la ulterior atención que ello demande.<br/>(3) En tarifas, rutas y fechas limitadas que permitan la acumulación de kilómetros LATAM Pass."}
		],
		tabs: [
			{
				name:"Beneficios Tarjetas",
				num_cols: "1",
				col1: [
					{tipo:"lista", content:[
						{item:"Acumulación de 1,5 KMS. LATAM Pass por dólar gastado en todas las compras en Chile y el extranjero.(1)"},
						{item:"Acumulará 0,5 kms. por dólar gastado en compras realizadas con la Tarjeta de Débito (Redcompra) en Chile y en el extranjero. (1)"},
						{item:"Los KMS. LATAM Pass acumulados tienen vigencia hasta el 31 de diciembre del año subsiguiente al que fueron acreditados."},
						{item:"Los kilómetros acumulados pueden ser canjeados por pasajes aéreos en LATAM y en las líneas aéreas asociadas a la alianza Oneworld."},
						{item:"La acumulación de KMS. LATAM Pass en cada período mensual de facturación opera hasta el monto del respectivo cupo nacional e internacional autorizado por el Banco para cada tarjeta. Esto aplica para todas las compras y pagos realizados en pesos y/o moneda extranjera en cada periodo."},
						{item:"<strong>Multiplica tus KMS LATAM Pass.</strong> Todas tus compras con Tarjetas de Crédito Santander LATAM Pass, en tiendas adheridas, multiplicarán los kms. que acumulas (6). Revisa las tiendas adheridas <a target='_blank' href='https://ssl.lan.com/multiplica/'>aquí</a>"},
						{item:"Los abonos que se efectúen durante el período mensual de facturación, aunque confieran nuevas disponibilidades sobre los cupos autorizados, no habilitan la acumulación de mayor nómero de KMS. LATAM Pass."},
						{item:"Doble acumulación de KMS. LATAM Pass en tus compras asociadas al cuidado de tu salud con tu Tarjeta Forever Santander LATAM Pass todas tus compras asociadas a Gimnasios, Centros Deportivos, Farmacias, ópticas, Isapres, Clínicas, Centros Médicos y Dentales acumulan el doble de KMS. LATAM Pass (2)."},
						{item:"20% de descuento en el canje de KMS. LATAM Pass por pasajes dentro de Chile para volar en baja temporada. (3)"},
						{item:"Acceso a salones Pacific Club con cobertura en todo Chile. <sup>(4)</sup>"}
					]},
					{tipo:"parrafo",content:"Tu tarjeta Forever te brinda acceso a los exclusivos salones Pacific Club en todo Chile, válido para clientes que estén volando en LATAM al momento de hacer uso del salón. Para ingresar, sólo presenta tu tarjeta Forever Santander LATAM Pass en la entrada del salón."},
					{tipo:"parrafo", content:"Gratuito solo para el titular de la Tarjeta y un acompañante. Acceso limitado según capacidad."},
					{tipo:"sub-titulo", content:"<strong>Seguro gratuito contra fraude y robo (5)</strong>"},
					{tipo:"parrafo", content:"Tu Tarjeta de Crédito Forever Santander LATAM Pass te da toda la seguridad que necesitas entregándote un seguro gratis contra fraude y robo. Coberturas de hasta UF 55, para tu Tarjeta Forever y/o adicionales: ante robo, hurto, extravío, adulteración, uso forzado por terceros, transferencias y compras por Internet, entre otros."},
					{tipo:"lista", content:[
						{item:"Hasta 4 meses antes del bloqueo."},
						{item:"Sin límite de eventos."},
						{item:"Sin deducible."},
						{item:"Cobertura Nacional e Internacional."}
					]},
				]
			},
			{
				name:"Seguros y Servicios",
				num_cols: "servicios",
				pdf:"../../pdf/Guia_Beneficios_MC_Gold_Santander.pdf",
				col1:[
					{
						tabs:[
							{name:"MasterCard", content:[
								{name:"Servicios", content:[
									{item:"Mastercard Specials, acceso a descuentos y beneficios exclusivos."},
									{item:"Alerta de Gastos."}
								]},
								{name:"Seguros", content:[
									{item:"Garantía extendida (El monto del beneficio máximo es de hasta USD 200 por incidente, sujeto a un máximo de USD 400 por Cuenta por un periodo de doce (12) meses)."},
									{item:"Protección de Compras (El monto del beneficio máximo es de hasta USD200 por incidente, sujeto a un máximo de USD400 por Cuenta por un periodo de doce (12) meses)."},
									{item:"Master Card Global Service: <ul><li>1. Reporte de Tarjeta Perdida</li><li>2. Reemplazo de Emergencia de la Tarjeta</li><li>3. Adelanto de Efectivo de Emergencia</li></ul>"},
									{item:"Seguro gratuito contra fraude y robo (5) <br/><br/> Tu Tarjeta de Crédito Forever Santander LATAM Pass te da toda la seguridad que necesitas entregándote un seguro gratis contra fraude y robo. <br/><br/> Coberturas de hasta UF 55, para tu Tarjeta Forever y/o adicionales: ante robo, hurto, extravío, adulteración, uso forzado por terceros, transferencias y compras por Internet, entre otros."}
								]}
							]}
						]
					}
				]
			},
			{
				name:"Tarifas",
				num_cols: "table",
				orientation:"horizontal",
				vigencia:"Tarifa válida contratos celebrados a partir del 3 de marzo 2017.",
				tarjetas:[
					{mastercard: true, head:"MASTERCARD Santander FOREVER"},
					{visa: false, head:""},
					{american: false, head:""}
				],
				col1: [
					{item:"Servicio de compra en cuotas",mastercard:"$0",visa:"$0",american:"$0"},
					{item:"Servicio de aumento temporal de cupo por exceso",mastercard:"$0",visa:"$0",american:"$0"},
					{item:"Comisión de mantención mensual para Cliente con Plan Multiproducto que contemple la tarjeta en mención.",mastercard:"UF 0",visa:"UF 0",american:"UF 0"},
					{item:"Comisión de mantención mensual para Cliente sin Plan Multiproducto que contemple la tarjeta en mención.",mastercard:"UF 0,18 mensual",visa:"UF 0,18 mensual",american:"UF 0,18 mensual"},
					{item:"Descuento del 100% de manutención sobre cuota semestral, por consumo",mastercard:"No Aplica",visa:"No Aplica",american:"No Aplica"},
					{item:"Modalidad de cobro",mastercard:"Vencido a todo evento",visa:"Vencido a todo evento",american:"Vencido a todo evento"},
					{item:"Servicio de avance en efectivo nacional (2)",mastercard:"UF 0,22",visa:"UF 0,22",american:"UF 0,22"},
					{item:"Servicio de avance EN CUOTAS nacional (2)",mastercard:"UF 0,22",visa:"UF 0,22",american:"UF 0,22"},
					{item:"Servicio de avance en el extranjero (1)",mastercard:"US$ 12",visa:"US$ 12",american:"US$ 12"},
					{item:"Servicio de súperavance",mastercard:"$12.990",visa:"$12.990",american:"$12.990"},
					{item:"Servicio de compra internacional (1)",mastercard:"3,50%",visa:"3,50%",american:"3,50%"},
					{item:"Servicio de avance y compra de divisas",mastercard:"UF 0,18",visa:"UF 0,18",american:"UF 0,18"},
					{item:"Servicio de remisión de tarjeta post bloqueo",mastercard:"No aplica",visa:"No aplica",american:"No aplica"},
					{item:"Servicio express de remisión de tarjeta post bloqueo",mastercard:"UF 0,5",visa:"UF 0,5",american:"UF 0,5"}
				]
			},
			{
				name:"Requisitos y Condiciones",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
							{item:"Nacionalidad Chilena o Extranjero con residencia definitiva en el país."},
							{item:"Edad mínima 55 años."},
							{item:"Ingresos mensuales líquidos superiores a $400.000."},
							{item:"Buenos antecedentes comerciales."},
							{item:"La aprobación está sujeta a la política comercial y de riesgo vigente."}
						] 
					},
					{tipo:"parrafo", content: "Para acceder y operar dentro de las Políticas de Crédito de Banco Santander , es necesario que los antecedentes del cliente sean confiables, tengan un adecuado respaldo a través de la documentación mínima exigida, sean verificables cuando corresponda y contengan toda la información completa. Por consiguiente, si estás interesado en adquirir un producto crediticio deberás contar entre otros con:"},
					{tipo:"lista", content: [
							{item:"Una fuente regular, estable de ingresos y/o patrimonio suficiente para el pago del crédito solicitado."},
							{item:"No presentar morosidades o protestos vigentes."},
							{item:"Correcto comportamiento de pago con sus distintos acreedores."},
							{item:"Cumplir con la política definida."}
						] 
					}
				]
			},
			{
				name:"Características Generales",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
							{item:"Tecnología CHIP: Le entrega mayor seguridad, minimizando fraudes y mal uso de sus tarjetas. Ahora, en lugar de deslizar su tarjeta para hacer una compra, deberá insertar la tarjeta en el terminal de venta (POS) mientras se realiza la transacción. Confirmará su compra como siempre con su clave secreta PinPass, logrando mayor seguridad y tranquilidad en su compra."},
							{item:"Tecnología CONTACTLESS: Esta tecnología ofrece mayor rapidez en sus compras de bajo monto, ya que basta con acercar la tarjeta al lector sin hacer contacto, sin necesidad de entregar la tarjeta, deslizarla por una ranura, ni insertarla en el terminal de venta."},
							{item:"Se puede usar en más de 50.000 establecimientos comerciales a lo largo de Chile y en más de 12 millones en 87 países del mundo."},
							{item:"Recibirás mensualmente un Estado de Cuenta con el detalle de tus compras, pagos y premios ganados."},
							{item:"Planificación de compra con el sistema de cuotas fijas."},
							{item:"Hacer tus compras en 3 cuotas precio contado en los establecimientos adheridos."},
							{item:"Tarjetas adicionales sin costo."},
							{item:"Pago Automático de Cuentas (PAT): Permite cargar tus cuentas de servicios (agua, luz, gas, etc.) en forma automática y pagarlas en una sola fecha todos los meses."},
							{item:"Descuentos especiales en restaurantes y tiendas exclusivas <a target='_blank' href='https://mov.santander.cl/beneficios?segmento=s-personas'>Ver Beneficios</a>"}
						] 
					}
				]
			},
			{
				name:"Preguntas Frecuentes",
				num_cols: "acordeon",
				col1: [
					{
						title:"¿Qué es el programa LATAM PASS?", 
						content: [
							{tipo:"parrafo", content: "Programa de beneficios que acumula Kilómetros LATAM Pass en el programa Pasajero Frecuente LATAM Pass por las compras realizadas con la Tarjeta de Crédito en Chile y en el extranjero y con la Tarjeta Redcompra Santander. Los kilómetros acumulados pueden ser canjeados por pasajes aéreos en LATAM y en las líneas aéreas asociadas a la alianza Oneworld."}
						] 
					},
					{
						title:"¿Cómo se acumulan kilómetros?", 
						content: [
							{tipo:"sub-titulo", content: "Por utilización de Tarjetas de Crédito LATAM Pass y Tarjeta Redcompra Santander:"},
							{tipo:"lista", content:[
								{item:"1,5 KMS. LATAM Pass por cada dólar gastado en Chile o en el extranjero con la Tarjeta de Crédito LATAM Pass Santander(1)."},
								{item:"0,5 KMS. LATAM Pass por cada dólar gastado en Chile con la Tarjeta Redcompra Santander (2)."}
							]},
							{tipo:"sub-titulo", content:"Por vuelos:"},
							{tipo:"lista", content:[
								{item:"Tú acumulas kilómetros (3) cada vez que vuelas en LATAM, en las líneas aéreas integrantes de oneworld y en las líneas aéreas asociadas a LATAM Pass. Puedes canjear estos kilómetros por pasajes gratis a más de 570 destinos alrededor del mundo. Actualmente, las líneas aéreas integrantes de la alianza oneworld son: LATAM, American Airlines, British Airways, Cathay Pacific, Finnair, Iberia, JAL, Malev, Qantas y Royal Jordanian."}
							]}
						] 
					},
					{
						title:"¿Dónde consultar sus kilómetros?", 
						content: [
							{tipo:"lista", content: [
								{item:"En cualquier oficina LATAM, o en el teléfono 600-526-2000"},
								{item:"En www.latam.com, ingresando nombre de usuario y clave."},
								{item:"Adicionalmente, los kilómetros acumulados son informados mensualmente a través del Estado de Cuenta."}
							]}
						] 
					},
					{
						title:"¿Cual es la vigencia de los Kilómetros?", 
						content: [
							{tipo:"parrafo", content: "Los Kilómetros originados por compras de Tarjetas LATAM Pass tendrán vigencia hasta el 31 de diciembre del año subsiguiente a la fecha de su generación. En caso de acumular 12.000 kms. o más con el uso de sus Tarjetas Santander LATAM Pass entre Diciembre del año previo y Noviembre del año en que se verifica la definición , se renovará el saldo completo de sus kms por 36 meses."}
						] 
					},
					{
						title:"¿El 20% de descuento en canjes aplica a todas las tarifas en KMS LATAM Pass?", 
						content: [
							{tipo:"parrafo", content: "Sí, por todos los canjes realizados por pasajes en rutas dentro de Chile en temporada baja, excluido Isla de Pascua."}
						] 
					},
					{
						title:"¿Cuándo podré usar los beneficios LATAM Pass de mi tarjeta?", 
						content: [
							{tipo:"parrafo", content: "Después de 15 días hábiles de activada su Tarjeta Forever."}
						] 
					},
					{
						title:"¿Cuáles son las condiciones y restricciones del uso del Salón Pacific Club?", 
						content: [
							{tipo:"parrafo", content: "El titular de la Tarjeta de Crédito FOREVER Santander LATAM Pass podrá ingresar a los Salones Pacific Club dentro de Chile presentando su Tarjeta Forver y firmando un Voucher en la entrada."}
						] 
					},
					{
						title:"¿Qué cubre el seguro contra fraude y robo?", 
						content: [
							{tipo:"parrafo", content: "Cubre la(s) tarjeta(s) de crédito Forever del Banco Santander perteneciente(s) al titular asegurado y/o sus adicionales. Cobertura Nacional e Internacional:"},
							{tipo:"lista", content:[
								{item:"Mal Uso Tarjetas de Créditos: En caso de robo, asalto, hurto, pérdida, uso malicioso, falsificación y/o adulteración de la Tarjeta de Crédito, su banda magnética, números de identificación, códigos y/o claves de seguridad, la compañía de seguros pagará el monto del fraude con un tope de UF 55 (limite máximo anual combinado). Quedarán cubiertas todas las transacciones realizadas durante los 120 días anteriores al bloqueo de la(s) tarjeta(s), siempre que la póliza se encuentre vigente a la fecha del siniestro."},
								{item:"Transferencias Remotas Tarjetas de Crédito: Se pagará los daños a causa de las transferencias con un tope de hasta UF 55 (limite máximo anual combinado), en caso de uso indebido o fraudulento de las claves con las cuales el asegurado está autorizado por el Banco Santander Santiago para realizar transferencias de fondo. Quedarán cubiertas las transferencias realizadas en los 120 días anteriores al bloqueo de tus claves, siempre que la póliza se encuentre vigente a la fecha del siniestro."}
							]}
						] 
					}
				]
			}
		]
	},
	// TITANIO SANTANDER
	{
		url:"titaniosantander",
		name:"Titanio Santander LATAM PASS",
		range: 2,
		min_renta:0,
		tipoTarjeta:"lanpass",
		clasificacion:"viajes",
		idForm: "",
		onbording: false,
		title:"",
		bajada:"Al obtener Tarjeta de Crédito Titanio Santander LATAM Pass, automáticamente se es parte del exclusivo programa de pasajeros frecuentes de LATAM, LATAM Pass y acumulas KMS. LATAM Pass al viajar en LATAM y otras líneas aéreas asociadas la Alianza Oneworld. Con su Tarjeta de Crédito Titanio Santander LATAM Pass, podrá acumular KMS. LATAM Pass para volar antes de lo que esperaba.",
		imagen: "img/img-tarjetas/santander-titanio-lanpass.png",
		link:"tarjetas/titaniosantander/index.asp",
		ver_mas:[
			{item:"Se puede usar en más de 50.000 establecimientos comerciales a lo largo de Chile."},
			{item:"Acumula 1,5 kms. por dólar gastado en compras realizadas con la Tarjeta de Crédito en Chile y en el extranjero."}
		],
		legales:[
			{item:"<strong>Frase Legal:</strong>"},
			{item:"Los beneficios no financieros del Programa Santander LANPASS rigen hasta el 28 de febrero de 2017.<br/>"},
			{item:"(1) Programa LATAM Pass y todos los beneficios LATAM Pass asociados a la tarjeta son de exclusiva responsabilidad de LATAM AIRLINES GROUP S.A., no cabiéndole a Banco Santander Chile responsabilidad alguna en ello ni en la ulterior atención que ello demande."},
			{item:"(1) Acumula 1,5 KMS. LATAM Pass por cada dólar gastado en Chile o en el extranjero con la Tarjeta. Se excluyen las siguientes operaciones con Tarjeta de Crédito y/o Redcompra Santander LATAM Pass: compras de cargo inmediato (avances en efectivo, compras en casinos y juegos de azar), compra de combustibles, pago de impuestos en general, notas de débito y/o crédito, así como cargo por intereses o cargos por parte del Banco (comisiones). Acumulación de kilómetros LATAM Pass en cada período mensual de facturación relacionados a compras y pagos efectuados en pesos o moneda extranjera con la Tarjeta de Crédito Santander LATAM Pass, opera hasta el monto del respectivo cupo nacional o internacional autorizado por el Banco para la tarjeta a la fecha del estado de cuenta. Los KMS. LATAM Pass acumulados se verán reflejados en la cuenta del titular LATAM Pass al mes siguiente o subsiguiente de realizadas las compras."},
			{item:"(2) Conozca los términos y condiciones de Multiplica, comercios adheridos, beneficio y vigencia de la adhesión de cada comercio en www.lan.com/multiplica. El Programa LATAM Pass, Multiplica y el abono y canje de Kilómetros LATAM Pass son responsabilidad de LATAM AIRLINES GROUP S.A., sin que corresponda a Banco Santander Chile intervención en ello. Revise términos y condiciones aquí."},
			{item:"<br/>"},
			{item:"<strong>Seguros y Servicios:</strong>"},
			{item:"Para detalles sobre limitaciones, exclusiones, información detallada e iniciar proceso de reclamos por servicios o seguros MasterCard, debe llamar a:<br/>1-800-307-7309 sin cobro en USA o Canadá.<br/>1-636-722-7111 cobro revertido."},
			{item:"<br/>"},
			{item:"<strong>Tarifas:</strong>"},
			{item:"Tarifa válida contratos celebrados a partir del 3 de marzo 2017."},
			{item:"(1)Los porcentajes deben aplicar por el monto del avance o compra según corresponda."},
			{item:"(2)Comisión aplica a cada transacción de avance en efectivo en Chile. Tarifa válida a partir de 01 de Diciembre de 2013, hasta 31 de diciembre de 2017. A partir de esta última fecha, aplica la tarifa precisada en el contrato del cliente."},
			{item:"(3) Comisión mensual aplica dentro de plan multiproducto: Limited Santander LATAM Pass, Santander LATAM Pass, IN, Superpuntos, One o Alianza.<br/>Este tarifado no aplica a Tarjetas Santander Banefe."},
			{item:"<br/>"},
			{item:"<strong>Preguntas Frecuentes:</strong>"},
			{item:"(1) Se excluyen las siguientes operaciones con Tarjeta de Crédito LATAM Pass: compras de cargo inmediato (avances en efectivo, compras en casinos y juegos de azar), compra de combustibles, pago de impuestos en general (contribuciones, IVA, etc), notas de débito y/o crédito, así como cargos por intereses o cargos por parte del Banco (comisiones). Acumulación de kilómetros LATAM Pass en cada período mensual de facturación relacionados a compras y pagos efectuados en pesos o moneda extranjera con la Tarjeta de Crédito Santander LATAM Pass, opera hasta el monto del respectivo cupo nacional o internacional autorizado por el Banco para la tarjeta a la fecha del estado de cuenta.<br/>(2) Beneficio exclusivo para clientes de Tarjetas de Crédito LATAM Pass que posean la Tarjeta Redcompra Santander. Se bonifican las compras realizadas en establecimientos comerciales adheridos a Transbank S.A. Se excluyen compras de combustible, casinos, juegos de azar y pagos de impuesto en general, los que no generan kilómetros LATAM Pass. Se excluyen también los giros en cajeros automáticos Redbanc. Los kilómetros acumulados se verán reflejados en la cuenta del titular LATAM Pass al mes siguiente o subsiguiente de realizadas las compras. Los beneficios del programa LATAM Pass son de exclusiva responsabilidad de LATAM AIRLINES GROUP S.A., no cabiéndole a Banco Santander Chile responsabilidad alguna en ello ni en la ulterior atención que ello demande.<br/>(3) En tarifas, rutas y fechas limitadas que permitan la acumulación de kilómetros LATAM Pass."}
		],
		tabs: [
			{
				name:"Beneficios Tarjetas",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
						{item:"<strong>Acumula 1,5 kms. por dólar gastado</strong>en compras realizadas con la Tarjeta de Crédito en Chile y en el extranjero.(1)"},
						{item:"<strong>Acumula 0,5 kms. por dólar gastado</strong>en compras realizadas con la Tarjeta de Débito (Redcompra) en Chile y en el extranjero.(1)"},
						{item:"Los kilómetros acumulados pueden ser canjeados por pasajes aéreos en LATAM y en las líneas aéreas asociadas a la alianza oneworld."},
						{item:"La acumulación de KMS. LATAM Pass en cada período mensual de facturación opera hasta el monto del respectivo cupo nacional e internacional autorizado por el Banco para cada tarjeta. Esto aplica para todas las compras y pagos realizados en pesos y/o moneda extranjera en cada periodo."},
						{item:"Los abonos que se efectúen durante el período mensual de facturación, aunque confieran nuevas disponibilidades sobre los cupos autorizados, no habilitan la acumulación de mayor número de KMS. LATAM Pass."},
					]},
					{tipo:"lista", content: [
						{item:"<strong>Multiplica tus KMS LATAM Pass.</strong> Todas tus compras con Tarjetas de Crédito Santander LATAM Pass, en tiendas adheridas, multiplicarán los kms. que acumulas (2). Revisa las tiendas adheridas <a href='https://ssl.lan.com/multiplica/' target='_blank'>aquí</a>"}
					]}
				]
			},
			{
				name:"Seguros y Servicios",
				num_cols: "servicios",
				pdf:"../../pdf/Manual_de_Seguridad_y_Beneficios_Vigencia_2012_Titanio.pdf",
				col1:[
					{
						tabs:[
							{name:"MasterCard", content:[
								{name:"Servicios", content:[
									{item:"Mastercard Specials, acceso a descuentos y beneficios exclusivos."},
									{item:"Alerta de Gastos."}
								]},
								{name:"Seguros", content:[
									{item:"Garantía extendida (El monto del beneficio máximo es de hasta USD 200 por incidente, sujeto a un máximo de USD 400 por Cuenta por un periodo de doce (12) meses)."},
									{item:"Protección de Compras (El monto del beneficio máximo es de hasta USD200 por incidente, sujeto a un máximo de USD400 por Cuenta por un periodo de doce (12) meses)."},
									{item:"Master Card Global Service: <ul><li>1. Reporte de Tarjeta Perdida</li><li>2. Reemplazo de Emergencia de la Tarjeta</li><li>3. Adelanto de Efectivo de Emergencia</li></ul>"},
									{item:"Protección contra mal uso de la Tarjeta Titanio como consecuencia de robo, hurto, pérdida o extravio."},
									{item:"Protección contra clonación."},
									{item:"Protección contra compras nacionales fraudulentas via internet."},
									{item:"Protección contra utilización forzada por terceros de Tarjetas de Crédito."}
								]}
							]}
						]
					}
				]
			},
			{
				name:"Tarifas",
				num_cols: "table",
				orientation:"horizontal",
				vigencia:"Tarifa válida contratos celebrados a partir del 3 de marzo 2017.",
				tarjetas:[
					{mastercard: true, head:"MASTERCARD TITANIO"},
					{visa: false, head:""},
					{american: false, head:""}
				],
				col1: [
					{item:"Servicio de compra en cuotas",mastercard:"$0"},
					{item:"Servicio de aumento temporal de cupo por exceso",mastercard:"$0"},
					{item:"Comisión de mantención mensual para Cliente con Plan Multiproducto que contemple la tarjeta en mención.",mastercard:"UF 0"},
					{item:"Comisión de mantención mensual para Cliente sin Plan Multiproducto que contemple la tarjeta en mención.",mastercard:"UF 0,18 mensual"},
					{item:"Descuento del 100% de manutención sobre cuota semestral, por consumo",mastercard:"No Aplica"},
					{item:"Modalidad de cobro",mastercard:"Vencido a todo evento"},
					{item:"Servicio de avance en efectivo nacional (2)",mastercard:"UF 0,22"},
					{item:"Servicio de avance EN CUOTAS nacional (2)",mastercard:"UF 0,22"},
					{item:"Servicio de avance en el extranjero (1)",mastercard:"2% + US$ 2,5"},
					{item:"Servicio de súperavance",mastercard:"$9.990"},
					{item:"Servicio de compra internacional (1)",mastercard:"2,5%"},
					{item:"Servicio de avance y compra de divisas",mastercard:"UF 0,18"},
					{item:"Servicio de remisión de tarjeta post bloqueo",mastercard:"No Aplica"},
					{item:"Servicio express de remisión de tarjeta post bloqueo",mastercard:"UF 0,5"}
				]
			},
			{
				name:"Requisitos y Condiciones",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
							{item:"Nacionalidad Chilena o Extranjero con residencia definitiva en el país."},
							{item:"Edad mínima 21 años."},
							{item:"Ingresos mensuales líquidos superiores a $400.000."},
							{item:"Buenos antecedentes comerciales."}
						] 
					},
					{tipo:"parrafo", content:"La aprobación está sujeta a la política comercial y de riesgo vigente."},
					{tipo:"parrafo", content:"Para acceder y operar dentro de las Políticas de Crédito de Banco Santander , es necesario que los antecedentes del cliente sean confiables, tengan un adecuado respaldo a través de la documentación mínima exigida, sean verificables cuando corresponda y contengan toda la información completa. Por consiguiente, si estás interesado en adquirir un producto crediticio deberás contar entre otros con:"},
					{tipo:"lista", content:[
						{item:"Una fuente regular, estable de ingresos y/o patrimonio suficiente para el pago del crédito solicitado."},
						{item:"No presentar morosidades o protestos vigentes."},
						{item:"Correcto comportamiento de pago con sus distintos acreedores."},
						{item:"Cumplir con la política definida."}
					]}
				]
			},
			{
				name:"Características Generales",
				num_cols: "1",
				col1: [
					{tipo:"parrafo", content:"<strong>Tecnología CHIP: </strong>Le entrega mayor seguridad, minimizando fraudes y mal uso de sus tarjetas. Ahora, en lugar de deslizar su tarjeta para hacer una compra, deberá insertar la tarjeta en el terminal de venta (POS) mientras se realiza la transacción. Confirmará su compra como siempre con su clave secreta PinPass, logrando mayor seguridad y tranquilidad en su compra."},
					{tipo:"parrafo", content:"<strong>Tecnología CONTACTLESS: </strong>Esta tecnología ofrece mayor rapidez en sus compras de bajo monto, ya que basta con acercar la tarjeta al lector sin hacer contacto, sin necesidad de entregar la tarjeta, deslizarla por una ranura, ni insertarla en el terminal de venta. Se puede usar en más de 50.000 establecimientos comerciales a lo largo de Chile y en más de 12 millones en 87 países del mundo."},
					{tipo:"parrafo", content:"Recibirás mensualmente un Estado de Cuenta con el detalle de tus compras, pagos y premios ganados."},
					{tipo:"parrafo", content:"Planificación de compra con el sistema de cuotas fijas. <br/>Hacer tus compras en 3 cuotas precio contado en los establecimientos adheridos. <br/>Tarjetas adicionales sin costo."},
					{tipo:"parrafo", content:"<strong>Pago Automático de Cuentas (PAT): </strong>"},
					{tipo:"parrafo", content:"Permite cargar tus cuentas de servicios (agua, luz, gas, etc.) en forma automática y pagarlas en una sola fecha todos los meses."},
					{tipo:"parrafo", content:"Permite realizar avances de dinero en efectivo en cajeros automáticos, Internet o directamente en nuestras sucursales."},
					{tipo:"parrafo", content:"Descuentos especiales en restaurantes y tiendas exclusivas."},
					{tipo:"parrafo", content:"<a href='https://mov.santander.cl/beneficios?segmento=s-personas' target='_blank'>Ver Beneficios</a>"}
				]
			},
			{
				name:"Preguntas Frecuentes",
				num_cols: "acordeon",
				col1: [
					{
						title:"¿Qué es el programa LATAM PASS?", 
						content: [
							{tipo:"parrafo", content: "Programa de beneficios que acumula Kilómetros LATAM Pass en el programa Pasajero Frecuente LATAM Pass por las compras realizadas con la Tarjeta de Crédito en Chile y en el extranjero y con la Tarjeta Redcompra Santander. Los kilómetros acumulados pueden ser canjeados por pasajes aéreos en LATAM y en las líneas aéreas asociadas a la alianza Oneworld."}
						] 
					},
					{
						title:"¿Cómo se acumulan kilómetros?", 
						content: [
							{tipo:"parrafo", content: "Por utilización de Tarjetas de Crédito LATAM Pass y Tarjeta Redcompra Santander:"},
							{tipo:"lista", content:[
								{item:"1,5 KMS. LATAM Pass por cada dólar gastado en Chile o en el extranjero con la Tarjeta de Crédito LATAM Pass Santander(1)."},
								{item:"0,5 KMS. LATAM Pass por cada dólar gastado en Chile con la Tarjeta Redcompra Santander (2)."}
							]},
							{tipo:"parrafo", content:"Por vuelos:"},
							{tipo:"parrafo", content:"Tú acumulas kilómetros (3) cada vez que vuelas en LATAM, en las líneas aéreas integrantes de oneworld y en las líneas aéreas asociadas a LATAM Pass. Puedes canjear estos kilómetros por pasajes gratis a más de 570 destinos alrededor del mundo. Actualmente, las líneas aéreas integrantes de la alianza oneworld son: LATAM, American Airlines, British Airways, Cathay Pacific, Finnair, Iberia, JAL, Malev, Qantas y Royal Jordanian."}
						] 
					},
					{
						title:"¿Dónde consultar sus kilómetros?", 
						content: [
							{tipo:"lista", content:[
								{item:"En cualquier oficina LATAM, o en el teléfono 600-526-2000"},
								{item:"En <a href='http://www.latam.com' target='_blank'>www.latam.com</a>, ingresando nombre de usuario y clave."}
							]},
							{tipo:"parrafo", content: "Adicionalmente, los kilómetros acumulados son informados mensualmente a través del Estado de Cuenta."}
						] 
					},
					{
						title:"¿Cual es la vigencia de los kilómetros?", 
						content: [
							{tipo:"parrafo", content: "Los Kilómetros originados por compras de Tarjetas LATAM Pass tendrán vigencia hasta el 31 de diciembre del año subsiguiente a la fecha de su generación. En caso de acumular 12.000 kms. o más con el uso de sus Tarjetas Santander LATAM Pass entre Diciembre del año previo y Noviembre del año en que se verifica la definición , se renovará el saldo completo de sus kms por 36 meses."}
						] 
					}
				]
			}
		]
	},
	// MASTERCARD UNIVERSAL
	{
		url:"mastercarduniversal",
		name:"MasterCard Universal",
		range: 1,
		min_renta:"400.000",
		max_renta:"699.999",
		featured: false,
		tipoTarjeta:"universal",
		clasificacion:"",
		idForm: "",
		onbording: false,
		title:"MasterCard Universal",
		bajada:"Con tu tarjeta Mastercard Universal, podrás comprar en miles de establecimientos comerciales a lo largo de Chile y el mundo, suscribir el pago automático (PAT) de tus cuentas, o realiza avances en efectivo. Además disfruta de descuentos especiales en restaurantes y tiendas exclusivas.",
		imagen: "img/img-tarjetas/santander-universal.png",
		link:"tarjetas/mastercarduniversal/index.asp",
		ver_mas:[
			{item:"Cupos de la tarjeta hasta UF 500 (sólo moneda nacional)"},
			{item:"Sin programa de Lealtad o Cobranding"}
		],
		legales:[
			{item:"<strong>Tarifas:</strong>"},
			{item:"Estas tarifas no aplican a contratos celebrados con anterioridad a dicha fecha."},
			{item:"(1)Comisión aplica a cada transacción de avance en efectivo en Chile. Tarifa válida a partir de 01 de Diciembre de 2013, hasta 31 de Diciembre de 2017. A partir de esta última fecha, aplica la tarifa precisada en el contrato del cliente. <br/>El Banco se reserva el derecho a modificarlas, conforme a las normas impartidas por la Superintendencia de Bancos. El cliente, en caso de no estar conforme con las comisiones informadas podrá poner término a su contrato. Este tarifado no aplica a Tarjetas Santander Banefe."},
			{item:"Este tarifado no aplica a Tarjetas Santander Banefe."}
		],
		tabs: [
			{
				name:"Beneficios Tarjeta",
				num_cols: "1",
				col1: [
					{tipo:"sub-titulo", content:"Tarjeta MasterCard Nacional que cuenta con los siguientes servicios y características:"},
					{tipo:"lista", content: [
							{item:"Cupos de la tarjeta hasta UF 500 (sólo moneda nacional)"},
							{item:"Sin programa de Lealtad o Cobranding"},
							{item:"Permite realizar compras nacionales normales y en cuotas"},
							{item:"Permite realizar avances en efectivo en Cajeros Automáticos, Internet y sucursales."}
						] 
					},
					{tipo:"sub-titulo",content:"Condiciones:"},
					{tipo:"lista", content:[
						{item:"La Carga Anual Equivalente (CAE), corresponde a la tasa (%) que muestra el costo de un crédito en un periodo de 36 meses y que considera la tasa de interés del periodo, comisiones y gastos asociados a la Tarjeta de Crédito Universal."},
						{item:"La CAE será informada en las simulaciones, contrato y estados de cuenta mensuales de su Tarjeta Universal."}
					]},
					{tipo:"parrafo", content:"El crédito universal esta diseñado como producto estandarizado con el objetivo de permitir al prestatario poder comparar más fácilmente entre distintos oferentes del producto crediticio respectivo, lo que conlleva un mercado más competitivo."}
				]
			},
			{
				name:"Seguros y Servicios",
				num_cols: "1",
				col1:[
					{tipo:"titulo", content:"MasterCard:"},
					{tipo:"sub-titulo", content:"Seguro de Accidentes en Viajes con una cobertura de USD 75.000"},
					{tipo:"lista", content:[
						{item:"Posee una protección contra muerte accidental, desmembramiento o parálisis al viajar por tierra, aire o agua en un transporte comercial común."},
						{item:"Aplica siempre que el boleto fuese comprado con su Tarjeta de Crédito MasterCard."}
					]},
					{tipo:"sub-titulo", content:"Protección de Compras"},
					{tipo:"parrafo", content:"El beneficio Protección de Compras aplica exclusivamente para compras realizadas en el país de residencia. Con su Tarjeta de Crédito usted puede comprar confiado, sabiendo que la mayoría de las compras que usted haga con su tarjeta pueden estar protegidas en caso de hurto o daño accidental, durante los primeros 45 días posteriores a la fecha de compra (indicada en el recibo de la tienda). Cobertura: Los montos máximos de beneficio son de US$200 por incidente, sujeto a un total de US$400, por un período de doce meses.(*) Una Compra con cobertura debe tener un período mínimo de Garantía de tres meses, sin exceder un período máximo de garantía de tres años."},
					{tipo:"parrafo", content:"Para detalles sobre limitaciones, exclusiones, información detallada e iniciar proceso de reclamos por servicios o seguros MasterCard, debe llamar a: "},
					{tipo:"parrafo", content:"1-800-307-7309 sin cobro en USA o Canadá <br/> 1-636-722-7111 cobro revertido."},
					{tipo:"parrafo", content:"Revisa la guía de beneficios MasterCard Standard <a href='/tarjetas/nuestras-tarjetas/pdf/Guia_Beneficios_Mastercard_Standard.pdf' target='_blank'>aquí.</a>"}
				]
			},
			{
				name:"Tarifas",
				num_cols: "table",
				orientation:"horizontal",
				vigencia:"Tarifa válida contratos celebrados a partir del 3 de marzo 2017.",
				tarjetas:[
					{mastercard: true, head:"MASTERCARD NACIONAL"},
					{visa: false, head:""},
					{american: false, head:""}
				],
				col1: [
					{item:"Servicio de compra en cuotas",mastercard:"$0",visa:"$0",american:"$0"},
					{item:"Comisión de manutención tarjeta",mastercard:"UF 0,14 mensual",visa:"UF 0,14 mensual",american:"UF 0,14 mensual"},
					{item:"Modalidad de cobro",mastercard:"Vencido a todo evento",visa:"Vencido a todo evento",american:"Vencido a todo evento"},
					{item:"Servicio de avance en efectivo nacional (1)",mastercard:"UF 0,20",visa:"UF 0,20",american:"UF 0,20"},
					{item:"Servicio de avance EN CUOTAS nacional (1)",mastercard:"UF 0,20",visa:"UF 0,20",american:"UF 0,20"},
					{item:"Servicio de súperavance",mastercard:"$12.990",visa:"$12.990",american:"$12.990"},
					{item:"Servicio de remisión de tarjeta post bloqueo",mastercard:"$0",visa:"$0",american:"$0"},
					{item:"Servicio express de remisión de tarjeta post bloqueo",mastercard:"$0",visa:"$0",american:"$0"}
				]
			},
			{
				name:"Requisitos y Condiciones",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
							{item:"Nacionalidad Chilena o Extranjero con residencia definitiva en el país."},
							{item:"Edad mínima 21 años."},
							{item:"Ingresos mensuales líquidos superiores a $400.000."},
							{item:"Buenos antecedentes comerciales."}
						] 
					}
				]
			},
			{
				name:"Características Generales",
				num_cols: "1",
				col1: [
					{tipo:"sub-titulo", content:"Tarjeta MasterCard Nacional que cuenta con los siguientes servicios y características:"},
					{tipo:"lista", content: [
							{item:"Cupos de la tarjeta hasta UF 500 (sólo moneda nacional)"},
							{item:"Sin programa de Lealtad o Cobranding"},
							{item:"Permite realizar compras nacionales normales y en cuotas"},
							{item:"Permite realizar avances en efectivo en Cajeros Automáticos, Internet y sucursales."}
						] 
					},
					{tipo:"sub-titulo",content:"Condiciones:"},
					{tipo:"lista", content:[
						{item:"La Carga Anual Equivalente (CAE), corresponde a la tasa (%) que muestra el costo de un crédito en un periodo de 36 meses y que considera la tasa de interés del periodo, comisiones y gastos asociados a la Tarjeta de Crédito Universal."},
						{item:"La CAE será informada en las simulaciones, contrato y estados de cuenta mensuales de su Tarjeta Universal."}
					]},
					{tipo:"parrafo", content:"'El crédito universal esta diseñado como producto estandarizado con el objetivo de permitir al prestatario poder comparar más fácilmente entre distintos oferentes del producto crediticio respectivo, lo que conlleva un mercado más competitivo.'"}
				]
			},
		]
	},
	// RED COMPRA
	{
		url:"redcompra",
		name:"Redcompra",
		range: 10,
		min_renta:"400.000",
		max_renta:"699.999",
		featured: false,
		tipoTarjeta:"redcompra",
		clasificacion:"",
		idForm: "",
		onbording: false,
		title:"La Tarjeta Redcompra o Tarjeta de Debito, es la tarjeta que esta asociada a la Cuenta Corriente, Cuenta a la vista o Tarjeta Universitaria Inteligente (TUI).",
		bajada:"La tarjeta permite realizar compras, pagos, giros y depósitos, en cualquier minuto y durante todo el año.",
		imagen: "img/img-tarjetas/santander-redcompra.png",
		link:"tarjetas/redcompra/index.asp",
		ver_mas:[
			{item:"Con su Tarjeta de Débito puede comprar en todos los comercios adheridos a transbank a lo largo de Chile sin costo ni comisión."},
			{item:"Compras en Chile y en el extranjero, con Tarjetas de Débito acumulan KMS. LATAM Pass."}
		],
		legales:[
			{item:"<strong>Beneficios:</strong>"},
			{item:"(1) La acumulación de KMS. LATAM Pass tiene vigencia hasta el 31 de Diciembre de 2017 y aplica en las siguientes condiciones: Cliente persona natural contratante de Tarjeta de Crédito Santander LATAM Pass, que a su vez sea contratante de Tarjeta Redcompra Santander, acumula 0.5 kms. LATAM Pass por cada dólar de compra en Chile con su Tarjeta Redcompra Santander. No aplica a clientes Banefe. Se bonifican compras con Tarjeta Redcompra Santander realizadas en establecimientos adheridos a Transbank S.A.; excepto compras de combustibles, casinos, juegos de azar y pagos de impuestos en general, lo que no generan KMS. LATAM Pass. Se excluyen también los giros en cajeros automáticos Redbanc. Los KMS. LATAM Pass acumulados se verán reflejados al mes siguiente o subsiguiente de realizadas las compras. Programa LATAM Pass y beneficios no financieros son de exclusiva responsabilidad de LATAM AIRLINES GROUP S.A., no cabiéndole a Banco Santander Chile responsabilidad alguna en ello ni en la ulterior atención que ello demande."},
			{item:"<br/>"},
			{item:"<strong>Tarifas:</strong>"},
			{item:"(1) Tarifas afectas a IVA, por lo que debe agregarse. Comisión válida para Giros Cajero Automático y Compras Internacionales.<br/>(2) Seguro de Desgravamen +Invalidez 2/3 disponible sólo para nuevas Líneas de Crédito."}
		],
		tabs: [
			{
				name:"Beneficios Tarjetas",
				num_cols: "1",
				col1: [
					{tipo:"parrafo", content: "La Tarjeta Redcompra o Tarjeta de Debito, es la tarjeta que esta asociada a la Cuenta Corriente, Cuenta a la vista o Tarjeta Universitaria Inteligente (TUI)."},
					{tipo:"parrafo", content: "La tarjeta permite realizar compras , pagos , giros y depósitos, en cualquier minuto y durante todo el año."},
					{tipo:"sub-titulo", content: "Compras"},
					{tipo:"parrafo", content: "Compra en comercios asociados a Transbank en Chile, sin costo adicional, con un monto máximo de compra diario $2.000.000.-, tanto en Chile como en el extranjero, siempre que tenga saldo disponible en la Cuenta Corriente o cuenta a la vista. En el extranjero, opera en comercios con el logo maestro. Para cliente SIN cuenta corriente el tope máximo de compra es de $200.000.-"},
					{tipo:"sub-titulo", content: "Giros"},
					{tipo:"parrafo", content: "La tarjeta Redcompra, permite realizar retiros de efectivo en cajeros automáticos en chile y el extranjero el monto máximo de giro diario es de $200.000.- el giro siempre esta sujeto al saldo disponible en la cuenta. En el extranjero, opera en cajeros automáticos con el logo cirrus."},
					{tipo:"parrafo", content: "Comprar con tu tarjeta redcompra en Chile, no tienen costo adicional. Al realizar giros y compras estas exento de pago del impuesto de timbres y estampillas."}
				]
			},
			{
				name:"Tarifas",
				num_cols: "table",
				orientation:"debito",
				vigencia:"",
				tarjetas:[
					{mastercard: false, head:""},
					{visa: false, head:""},
					{american: false, head:""}
				],
				col1: [
					{tarjeta:"Cliente",item1:"UF 0,28",item2:"Mensual Anticipada",item3:"--",item4:"US$ 8 cada giro y/o cada compra"},
					{tarjeta:"Tarjeta universitaria inteligente (Estudiantes) Aperturada desde 1 de Marzo 2011",item1:"0",item2:"--",item3:"Comisión Fija Mensual de $990, aplica sólo si hay a lo menos un giros o consulta en cajeros automáticos que no pertenezcan a la Red de cajeros Banco Santander (2)",item4:"US$ 2,33 cada giro y/o cada compra"},
					{tarjeta:"Tarjeta universitaria inteligente (Estudiantes) Aperturada hasta el 28 de Febrero del 2011",item1:"0",item2:"--",item3:"UF 0,015 por cada giro a partir del 11°",item4:"US$ 2,33 cada giro y/o cada compra"},
					{tarjeta:"Tarjeta universitaria inteligente (Funcionarios)",item1:"0",item2:"--",item3:"0",item4:"US$ 2,33 cada giro y/o cada compra"}
				]
			},
			{
				name:"Requisitos y Condiciones",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
							{item:"Tener una cuenta vigente asociada, ya sea una cuenta corriente o cuenta vista."}
						] 
					}
				]
			},
			{
				name:"Clave Secreta de su tarjeta",
				num_cols: "1",
				col1: [
					{tipo:"sub-titulo",content:"Por Internet:"},
					{tipo:"lista",content:[
						{item:"Ingresa a www.santander.cl con tu Rut y clave de Internet. Ante cualquier consulta llama a VOX al (600) 3203000."},
						{item:"En menú izquierdo ingresa a “Tarjeta de Crédito” después en el menú superior haz clic en PinPass."},
						{item:"Para confirmar el cambio de Clave Secreta PinPass deberás ingresar tu SuperClave. Si no la tiene, solicítela en cualquier sucursal Santander."}
					]},
					{tipo:"sub-titulo",content:"Por Cajero Automático:"},
					{tipo:"lista", content:[
						{item:"Inserta tu tarjeta de debito e ingresa los primeros 4 dígitos de su RUT., para la TUI ingrese los últimos dígitos de su Rut sin el digito verificador."},
						{item:"Selecciona la opción “Cambio Número Secreto”."},
						{item:"Ingresa tu actual número secreto (los 4 primeros dígitos de tu RUT), para la TUI ingrese los últimos dígitos de su Rut sin el digito verificador, posteriormente ingresa tu nueva clave y confirmarla."}
					]}
				]
			},
			{
				name:"Características Generales",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
							{item:"Puedes pedir vuelto cuando realices tus compras en líder, Copec y otros comercios adheridos."},
							{item:"Puedes pagar tus cuentas mediante pago automático de cuenta (PAC)"},
							{item:"Puedes pagar tus productos de créditos y Tarjetas de Crédito Santander mediante PAC."},
							{item:"Todas las tarjetas de Debito Cuenta Vista, Ahorro Banco y Chequeras electrónicas de Banefe son con Banda. Solo la tarjeta de Debito de Cta. Cte. tiene CHIP."},
							{item:"<strong>Tecnología CHIP:</strong>Te garantiza mayor seguridad, minimizando fraudes y mal uso de tus tarjetas. Ahora en lugar de deslizar tu tarjeta para hacer una compra, tendrás que insértala en el terminal de venta (POS) mientras se realiza la transacción, confirmaras tu compra como siempre con tu Clave Secreta PinPass, logrando mayor seguridad y tranquilidad en tu compra."},
							{item:"<strong>Tecnología Contactless:</strong>Esta tecnología ofrece mayor rapidez a tus compras de bajo monto, ya que basta con acercar la tarjeta al lector sin hacer contacto, sin necesidad de entregarla, deslizarla por una ranura ni insertar en el terminal de venta."},
							{item:"Si eres titular de una Tarjeta de Crédito Santander LATAM Pass, las compras con Tarjeta de Débito también acumulan kilómetros.(siempre y cuando tenga tarjeta de Crédito Santander LATAM Pass(1))."}
						] 
					}
				]
			}
		]
	},
	// RED COMPRA SELECT
	{
		url:"redcompraselect",
		name:"Débito Select",
		range: 1,
		min_renta: 0,
		tipoTarjeta:"redcompra",
		clasificacion:"",
		idForm: "",
		onbording: false,
		title:"",
		bajada:"Diseñada de manera exclusiva para nuestros clientes Select, con un innovador sistema de Chip y Contactless que le brindará mayor seguridad en su uso. Con esta Tarjeta, podrás realizar giros de dinero en efectivo sin costo en el extranjero. Exclusivamente en cajeros automáticos (ATM) Santander. (No considera otros servicios que se ofrezca en ATM con cobro, las comisiones cobradas por los giros se reversan al mes siguiente o subsiguiente de realizado el retiro).",
		imagen: "img/img-tarjetas/santander-debito-select.png",
		link:"tarjetas/redcompraselect/index.asp",
		ver_mas:[
			{item:"Diseñada de manera exclusiva para nuestros clientes Select, con un innovador sistema de Chip y Contactless que le brindará mayor seguridad en su uso. Con esta Tarjeta, podrás realizar giros de dinero en efectivo sin costo en el extranjero, exclusivamente en cajeros automáticos Santander. (No considera otros servicios que se ofrezca en cajero automático con cobro, las comisiones cobradas por los giros se reversan al mes siguiente o subsiguiente de realizado el retiro)."}
		],
		legales:[
			{item:"<strong>Tarifas:</strong>"},
			{item:"(1) Tarifas afectas a IVA, por lo que debe agregarse. Comisión válida para Giros Cajero Automático y Compras Internacionales.<br/>(2) Seguro de Desgravamen +Invalidez 2/3 disponible sólo para nuevas Líneas de Crédito."},
			{item:"<br/>"},
			{item:"Preguntas Frecuentes"},
			{item:"Cliente Persona Natural contratante de Tarjeta de Crédito Santander LATAM Pass, que a su vez sea contratante de Tarjeta Redcompra Santander, acumula 0,5 KMS. LATAM Pass por cada dólar de compra en Chile con su Tarjeta Redcompra Santander. No aplica a clientes Banefe. Se bonifican compras con Tarjeta Redcompra Santander realizadas en establecimientos adheridos a Transbank S.A; excepto compras de combustibles, casinos, juegos de azar y pagos de impuestos en general, los que no generan KMS. LATAM Pass. Se excluyen también los giros en Cajeros Automáticos Redbanc. Los KMS. LATAM Pass acumulados se verán reflejados al mes siguiente o subsiguiente de realizadas las compras. Todos los beneficios descritos en este documento tienen vigencia por el año calendario 2015."}
		],
		tabs: [
			{
				name:"Beneficios Tarjetas",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
						{item:"Esta Tarjeta de Débito, te permite obtener dinero en efectivo, SIN COSTO, en más de 30.000 Cajeros Automáticos Santander en el mundo."},
						{item:"Disfruta este beneficio en tus viajes, nosotros nos preocuparemos de devolver el cobro de la comisión internacional en tu cartola mensual."},
						{item:"Además si eres titular de una Tarjeta de Crédito Santander LATAM Pass, tus compras con Tarjeta de Débito también acumulan kms. en las compras nacionales e internacionales."}
					]}
				]
			},
			{
				name:"Tarifas",
				num_cols: "table",
				orientation:"debito",
				vigencia:"",
				tarjetas:[
					{mastercard: false, head:""},
					{visa: false, head:""},
					{american: false, head:""}
				],
				col1: [
					{tarjeta:"Cliente",item1:"<strong>Normal: </strong>UF 0,28 <br/> <strong>Adicional:  UF 0,06 (c/u)</strong> ",item2:"Mensual Anticipada",item3:"--",item4:"US$ 0 para giros internacionales ATM Santander, US$8 por cada compra internacional"},
					{tarjeta:"Cuenta Familia",item1:"<strong>Transferencia Libre: </strong>UF 0,800 <br/><strong>Transferencia Programada: </strong>UF 0,400",item2:"Semestral Anticipada",item3:"UF 0,016 por cada giro y/o cada compra a partir del 1°",item4:"US$ 2,33 cada giro y/o cada compra"},
					{tarjeta:"Tarjeta universitaria inteligente (Estudiantes) Aperturada desde 1 de Marzo 2011",item1:"0",item2:"--",item3:"Comisión Fija Mensual de $990, aplica sólo si hay a lo menos un giros o consulta en cajeros automáticos que no pertenezcan a la Red de cajeros Banco Santander (2)",item4:"US$ 2,33 cada giro y/o cada compra"},
					{tarjeta:"Tarjeta universitaria inteligente (Estudiantes) Aperturada hasta el 28 de Febrero del 2011",item1:"0",item2:"--",item3:"UF 0,015 por cada giro y/o cada compra a partir del 11°",item4:"US$ 2,33 cada giro y/o cada compra"},
					{tarjeta:"Tarjeta universitaria inteligente (Funcionarios)",item1:"0",item2:"--",item3:"0",item4:"US$ 2,33 cada giro y/o cada compra"}
				]
			},
			{
				name:"Requisitos y Condiciones",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
							{item:"Tener una cuenta corriente vigente asociada."}
						] 
					}
				]
			},
			{
				name:"Características Generales",
				num_cols: "1",
				col1: [
					{tipo:"lista", content: [
							{item:"<strong>Tecnología CHIP:</strong> Le entrega mayor seguridad, minimizando fraudes y mal uso de sus tarjetas. Ahora, en lugar de deslizar su tarjeta para hacer una compra, deberá insertar la tarjeta en el terminal de venta (POS) mientras se realiza la transacción. Confirmarí su compra como siempre con su clave secreta PinPass, logrando mayor seguridad y tranquilidad en su compra."},
							{item:"<strong>Tecnología CONTACTLESS:</strong> Esta tecnología ofrece mayor rapidez en sus compras de bajo monto, ya que basta con acercar la tarjeta al lector sin hacer contacto, sin necesidad de entregar la tarjeta, deslizarla por una ranura, ni insertarla en el terminal de venta."},
							{item:"Esta Tarjeta de Débito está diseñada de manera exclusiva para nuestros clientes Select, con un innovador sistema de chip que le brindará mayor seguridad en su uso. Al contar con una imagen diferenciada le permitirá tener acceso a espacios y beneficios que Santander Select tiene para usted."},
							{item:"Puede realizar compras en miles de comercios, o en la red Maestro en el extranjero, sin costo ni comisión adicional."},
							{item:"Puede realizar giros en la red de cajeros automáticos Redbanc en Chile y red Cirrus en el mundo."},
							{item:"Al usar su Tarjeta Redcompra Santander acumula Kilómetros LATAM Pass según el programa asociado a su Tarjeta de Crédito. (1) <br/><br/><span class='success'>Programa LATAM Pass: Por cada US$ 1 en compras nacionales con Tarjeta Redcompra Santander acumula 0,5 KMS LATAM Pass (siempre y cuando tenga Tarjeta de Crédito Santander LATAM Pass).</span>"}
						] 
					},
					{tipo:"imagen", content:"nuestras-tarjetas/assets/img/cuadro-debito.png"}
				]
			},
			{
				name:"Preguntas Frecuentes",
				num_cols: "acordeon",
				col1: [
					{
						title:"¿Cómo activo la clave de mi tarjeta Redcompra?", 
						content: [
							{tipo:"parrafo", content: "1. Ingrese su tarjeta de débito en cualquier cajero automático"},
							{tipo:"parrafo", content: "2. Digite los 4 primeros dígitos de su Rut."},
							{tipo:"parrafo", content: "3. Seleccione la opción Cambio Número Secreto"},
							{tipo:"parrafo", content: "4. Ingrese nuevamente los 4 primeros dígitos de su rut, para luego digitar su nueva contraseña."},
							{tipo:"parrafo", content: "5. La tarjeta queda habilitada en forma inmediata para comprar, para girar a través de cajeros automáticos hay que esperar 48 horas hábiles."}
						] 
					},
					{
						title:"¿Puedo acumular KMS. LATAM Pass comprando con mi tarjeta de Débito?", 
						content: [
							{tipo:"parrafo", content: "Al comprar con tu Tarjeta Redcompra Santander acumulas Kilómetros LATAM Pass según el programa asociado a tu Tarjeta de Crédito. Beneficio exclusivo para clientes que además de tener la Tarjeta Redcompra Santander, posean Tarjeta de Crédito LATAM Pass o Movistar, según corresponda. En caso de pertenecer a ambos Programas, acumulará solamente Kilómetros LATAM Pass. Se excluyen compras de combustible, casinos, juegos de azar, pagos de impuesto en general y giros en cajeros automáticos Redbanc. (1)"},
							{tipo:"lista", content:[
								{item:"Programa LATAM Pass: Por cada US$ 1 en compras nacionales con Tarjeta Redcompra Santander acumula 0,5 kilómetros LATAM Pass (siempre y cuando tenga Tarjeta de Crédito Santander LATAM Pass)."}
							]}
						] 
					},
					{
						title:"¿Existe algún limite para compras y/o giros?", 
						content: [
							{tipo:"parrafo", content: "Límite diario de compras y giros:"},
							{tipo:"lista", content:[
								{item:"Cliente con cuenta corriente puede comprar con Tarjeta Redcompra su saldo disponible + Línea de Crédito, con monto máximo de $2.000.000."},
								{item:"Para clientes sin cuenta corriente el tope máximo de compra es de $1.000.000."},
								{item:"El cliente podrá girar un máximo de $200.000 diarios."}
							]}
						] 
					},
					{
						title:"Para asistencia en general", 
						content: [
							{tipo:"parrafo", content: "pérdida, robo o si olvido mi clave secreta llamar a VOX al (600) 320 3000"}
						] 
					}
				]
			}
		]
	},

];





/*
{
				name:"Seguros y Servicios",
				num_cols: "servicios",
				col1:[
					{
						tabs:[
							{name:"MasterCard", content:[
								{name:"Servicios", content:[
									{item:""},
									{item:""},
									{item:""}
								]},
								{name:"Seguros", content:[
									{item:""},
									{item:""},
									{item:""}
								]}
							]},
							{name:"Visa", content:[
								{name:"Servicios", content:[
									{item:""},
									{item:""},
									{item:""},
									{item:""}
								]},
								{name:"Seguros", content:[
									{item:""},
									{item:""}
								]}
							]},
							{name:"American Express", content:[
								{name:"Servicios",content:[
									{item:""},
									{item:""},
									{item:""}
								]},
								{name:"Seguros",content:[
									{item:""},
									{item:""},
									{item:""},
									{item:""}
								]}
							]}
						]
					}
				]
			},

*/





/*
	{
				name:"Tarifas",
				num_cols: "table",
				orientation:"horizontal",
				vigencia:"",
				tarjetas:[
					{mastercard: true, head:" MASTERCARD SANTANDER 321"},
					{visa: false, head:""},
					{american: false, head:""}
				],
				col1: [
					{item:"",mastercard:""},
				]
			},
*/