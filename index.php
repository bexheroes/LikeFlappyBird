<html>
	<head>
		<title>Flappy bird clone</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="script.js"></script>
		<link rel="stylesheet" href="style.css">
	</head>
	<body>
		<div id="game">
			<div id="game_in">
				<div id="before">
					<div id="before_in">
						<div id="before_top">
							<div id="before_top_in">
								En Yüksek Skor : <span id="highscore"> 0 </span>
							</div>
						</div>
						<div id="before_mid">
							<div id="before_mid_in">
								<div id="before_mid_st">
									<img src="images/tap.png" width="80px">
								</div>
								<div id="click_to_start">Click here to start game</div>
							</div>
						</div>
						<div id="before_bot">
							<div id="before_bot_in">
								Copyright 2019<br>
								Dedicated to Tuana
							</div>
						</div>
					</div>
				</div>
				<div id="after">
					<div id="game_area">
						<div id="bird">
							<div id="bird_in">
							
							</div>
						</div>
						<div id="scoretab">
							<div id="scoretabin">
								<span id='ss'>0</span>
							</div>
						</div>
					</div>
				</div>
				<div id="gameover">
					<div id="gameover_in">
						<div id="gameover_top">
							<div id="gameover_top_in">
								GAME OVER
							</div>
						</div>
						<div id="gameover_bot">
							<div id="gameover_bot_in">
								Your Score : <span id="yourscore2">0</span>
							</div>
						</div>
						<div id="gameover_bot">
							<div id="gameover_bot_in">
								High Score : <span id="highscore2">0</span>
							</div>
						</div>
						<div id="gameover_bot_bot">
							<div id="gameover_bot_bot_in">
								<img src="images/try.png" width="55px">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>