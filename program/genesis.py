import random
import sys

def random01():
    return random.randint(0,1)

# if 1+1 !=2 is false, it's easy, everything is normal
# but if 1+1 != 2 is true, what value should it be?
# I think it could either be more or less
def judgeOnePlusOne():
	while True:
		a = random01()
		a = (a<<1) ^ random01()
		if a == 0:
			return 0  
		if a == 1:
			return 1
		if a == 2:
			return 2

def add(a, b):
	# convert a and b to binary numbers 
	# adding it digit by digit using the judge rule above
	# which is
	#		0 case, 1 + 1 = 0
	#		1 case, 1 + 1 = 1
	#		2 case, 1 + 1 = 10
	# then convert the result back to decimal numbers
	# if unable to, throw errors




			
		
	

