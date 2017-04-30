function shuffle(){
	for(var i = l.length - 1; i >= 0; i--){
		var j = Math.floor(Math.random() * (i + 1));
		var tmp = l[i];
		l[i] = l[j];
		l[j] = tmp;
	}
}

function init(){
	l = [];
	for(var i = 0; i < len; i++){
		l.push(Math.round(i * (board_size / len)));
	}
	shuffle();

	step = 2;
	clearTimeout(main_timer);
	main();
}

init();

function merge(a, slice_size, b){
	var lcopy = l.slice(a, b + 1);
	var l_curr = 0;
	var r_curr = slice_size;
	var i_curr = a;

	while(l_curr < slice_size && r_curr < lcopy.length){
		if(lcopy[l_curr] <= lcopy[r_curr]){
			l[i_curr] = lcopy[l_curr];
			l_curr++;
			i_curr++;
		} else {
			l[i_curr] = lcopy[r_curr];
			r_curr++;
			i_curr++;
		}
	}
	while(l_curr < slice_size){
		l[i_curr] = lcopy[l_curr];
		l_curr++;
		i_curr++;
	}
	while(r_curr < lcopy.length){
		l[i_curr] = lcopy[r_curr];
		r_curr++;
		i_curr++;
	}
}

function main(){
	if(step >= len * 2){
		clearTimeout(main);
		return;
	}
	for(var j = 0; j < len; j += step){
		merge(j, Math.min(step / 2, len - j), Math.min(j + step - 1, len - 1));
	}
	step *= 2;
	render();
	main_timer = setTimeout(main, 300);
}
