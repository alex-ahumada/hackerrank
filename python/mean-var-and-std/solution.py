import numpy

# fix output format mismatch
numpy.set_printoptions(legacy='1.13')

n,m = map(int,input().split())
array = []

for i in range(n):
    tmp = list(map(int,input().split()))
    array.append(tmp)

np_array = numpy.array(array)

print(numpy.mean(np_array, axis = 1))
print(numpy.var(np_array, axis = 0))
print(numpy.std(np_array))