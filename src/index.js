module.exports = function warmup(temperature) {
  if(typeof(temperature) == "number"){	
		return 1.8 * temperature + 32;
	}else{
		return null;
	}
};
