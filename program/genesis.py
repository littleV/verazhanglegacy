import random
import sys

def random01():
    return random.randint(0,1)

# if 1+1 !=2 is false, it's easy, everything is normal
# but if 1+1 != 2 is true, what value should it be?
def baseRuleOfOnePlusOne():
	# In binary
	#		0 case, 1 + 1 = 0
	#		1 case, 1 + 1 = 1
	#		2 case, 1 + 1 = 10
	while True:
		a = random01()
		a = (a<<1) ^ random01()
		if a == 0:
			return 0  
		if a == 1:
			return 1
		if a == 2:
			return 2

def ruleOfZeroPlusZero(baseRule):
	map = {
		0: 1,
		1: 2,
		2: 0
	}
	return map.get(baseRule)

def ruleOfZeroPlusOne(baseRule):
	map = {
		0: 2,
		1: 0,
		2: 1
	}
	return map.get(baseRule)

class CustomException(Exception):
    pass

def add(a, b):
	if (a < 0) or (b < 0):
		raise CustomException("Addition only works for positive intgers")
	a = bits(a)
	a.reverse()
	b = bits(b)
	b.reverse()
	lenA = len(a)
	lenB = len(b)
	if (lenA < lenB) :
		tmp = a
		a = b
		b = tmp
		lenA = len(a)
		lenB = len(b)
	result = []
	# todo add bit by bit

def bits(number):
	return [int(d) for d in str(bin(number))[2:]]

def decimal(arrayOfDigits):
	# todo convert bits back to decimal 
	return 0

	






			
		
	

