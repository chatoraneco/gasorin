console.log("main.js!!");

const sndcount = 0
const sndlist =[1,2,3,5,6]
/*
// jQuery入門
//	公式サイト: https://jquery.com/
//	チュートリアル: https://snome.jp/programming/jquery1/
//	チートシート: https://web-cheatsheet.com/jquery-to-vanillajs
*/



$(document).ready(()=>{
	console.log("ready");
	let zei = 0;

	$("#btn").click(()=>{
		console.log("クリックしたよ");

		const Gkakaku = $("#gasolin").val();
		
		//console.log("gasolin:", gasolin);
		
		
		


		const kyori = $("#soukou").val();
		
		//console.log("soukou:", soukou);

		
		

		const kouritu = $("#nenpi").val();
		
		//console.log("nenpi:", nenpi);




		if (Gkakaku === ""){
			console.log("Gkakakuは空文字ですね!");
		$("#msg_info").text("ガソリン価格を入力してください!");
		return;//ここで停止
		}

		if (kyori === ""){
			console.log("kyoriは空文字ですね!");
		$("#msg_info").text("走行距離を入力してください!");
		return;//ここで停止
		}
		
		if (kouritu === ""){
			console.log("kourituは空文字ですね!");
		$("#msg_info").text("車の燃費を入力してください!");
		return;//ここで停止
		}

		const gasolin = parseInt(Gkakaku);
		if(Number.isInteger(gasolin)=== false){
			console.log("gasolinは数値じゃないですね!");
		$("#msg_info").text("ガソリン価格に数値を入力してください!");
		return;//ここで停止
		}

		const soukou = parseInt(kyori);
		if(Number.isInteger(soukou) === false){
			console.log("soukouは数値じゃないですね!");
		$("#msg_info").text("走行距離に数値を入力してください!");
		return;//ここで停止
		}

		const nenpi = parseInt(kouritu);
		if(Number.isInteger(nenpi) === false){
			console.log("nenpiは数値じゃないですね!");
		$("#msg_info").text("車の燃費に数値を入力してください!");
		return;//ここで停止
		}
		
		

		const result = gasolin * soukou;
		console.log("result:", result);
		const result1 = result / nenpi;
		console.log( "result1:", result1);
		const result2 = Math.round(result1);
		console.log("result2:", result2);
		const str_result2 = String(result2);
		
		$("#msg_info").text("");
		$("#gasolindai").text(str_result2);
		
		

		
		
		

		
	
		if (str_result2.length >= 5){
		const snd1 = new Howl({
			src:"./voice/gasorin.wav",//サウンドファイルのパス
			onend:()=>{
				snd2.play();
			}
		});
		const snd2 = new Howl({
			src:"./voice/dai.wav",//サウンドファイルのパス
			onend:()=>{
				snd3.play();
			}
		});
		const snd3 = new Howl({
			src:"./voice/ha.wav",//サウンドファイルのパス
			onend:()=>{ 
				snd4_10000_over.play();
			}
		});
		const snd4_10000_over = new Howl({
			src:"./voice/1manijou.wav",//サウンドファイルのパス
			onend:()=>{
				snd6.play();
			}
		});
		const snd6 = new Howl({
			src:"./voice/nanoda.wav"//サウンドファイルのパス
		});

		
		snd1.play();
	}else if (str_result2.length < 5){
		if(result2>=5000){
		const snd1 = new Howl({
			src:"./voice/gasorin.wav",//サウンドファイルのパス
			onend:()=>{
				snd2.play();
			}
		});
		const snd2 = new Howl({
			src:"./voice/dai.wav",//サウンドファイルのパス
			onend:()=>{
				snd3.play();
			}
		});
		const snd3 = new Howl({
			src:"./voice/ha.wav",//サウンドファイルのパス
			onend:()=>{ 
				snd4_1.play();
			}
		});
		const snd4_1 = new Howl({
			src:"./voice/under_10000.wav",//サウンドファイルのパス
			onend:()=>{
				snd4_2.play();
			}
		});
		const snd4_2 = new Howl({
			src:"./voice/over_5000.wav",//サウンドファイルのパス
			onend:()=>{
				snd6.play();
			}
		});
		const snd6 = new Howl({
			src:"./voice/nanoda.wav"//サウンドファイルのパス
		});

		
		snd1.play();
	} else if(result2<5000){
		const snd1 = new Howl({
			src:"./voice/gasorin.wav",//サウンドファイルのパス
			onend:()=>{
				snd2.play();
			}
		});
		const snd2 = new Howl({
			src:"./voice/dai.wav",//サウンドファイルのパス
			onend:()=>{
				snd3.play();
			}
		});
		const snd3 = new Howl({
			src:"./voice/ha.wav",//サウンドファイルのパス
			onend:()=>{ 
				snd4_3.play();
			}
		});
		const snd4_3 = new Howl({
			src:"./voice/under_5000.wav",//サウンドファイルのパス
			onend:()=>{
				snd6.play();
			}
		});
		const snd6 = new Howl({
			src:"./voice/nanoda.wav"//サウンドファイルのパス
		});

		
		snd1.play();

	}

}
	



	


	
})





// アニメーション
function doAnimation(id, type){
	const elem = $(id);
	elem.addClass("animate__animated");
	elem.addClass(type);
	elem.on("animationend", ()=>{
		elem.off("animationend");
		elem.removeAttr("class");
	});
}})