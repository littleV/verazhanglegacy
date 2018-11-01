import random

def random01():
    return random.randint(0,1)

# if 1+1 !=2 is false, it's easy, everything is normal
# but if 1+1 != 2 is true, what value should it be?
# I think it could either be more or less
def judgeOnePlusOneEqualToTwo():
	while True:
		a = random01()
		a = (a<<1) ^ random01()
		if a== 0:
			# for case 1+1 = 0
			return 0;  
		if a== 1:
			# for case 1+1 = 2
			return 1;
		if a== 2:
			# for case 1+1 = 4
			return 2;

def resultOfOnePlusOne():
	rule = judgeOnePlusOneEqualToTwo()
	if rule == 0:
		return 0
	elif rule == 1:
		return 2
	else:
		return 4
	
# Amazingly, for all three cases above, 1 - 1 = 0 is always true 
def resultOfOneMinusOne():
	return 0;


			
		
	

