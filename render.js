function render(){
	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, len, board_size);

	for(var i = 0; i < len; i++){
		ctx.fillStyle = "#fff";
		ctx.fillRect(i, 0, 1, l[i]);
	}
}
