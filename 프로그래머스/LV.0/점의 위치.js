function solution(dot) {
  if (dot[0] > 0) {
    if (dot[1] > 0) return 1;
    else return 4;
  } else if (dot[0] < 0) {
    if (dot[1] > 0) return 2;
    else return 3;
  }
}

x축  (3,2) (3 ,-2) 
     0 1    0   1
     dot[0] > 0
    dot[1]
y축  (-3,2) (-3,-2)
     0 1     0  1 
