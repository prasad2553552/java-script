//union() 
let a = new Set([1,2,3,])
let b = new Set([3,4,5])
console.log(a.union(b))
//Returns a new Set containing all unique values from both Sets.

let sub1 = new Set(["python","java","html"])
let sub2 = new Set(["javascript","python","css"])
console.log(sub1.union(sub2));

//difference()
let per1 = new Set([1,2,3,4,]);
let per2 = new Set([4,5,6,])
console.log(per1.difference(per2))
console.log(per2.difference(per1))
//Returns a new set contsining values present in the first Set but not in the second set

let person1 = new Set(["ram","sethara","lokesh","ravi"])
let person2 = new Set(["kiran","lokesh","ravi"])
console.log(person1.difference(person2))

//intersection()
let A = new Set ([1,2,3,4,5]);
let B = new Set ([3,4,5,6,7]);
console.log(A.intersection(B));
console.log(B.intersection(A))
//returns a new set containing values common to both Sets

//isDisjointFrom()
let c = new Set ([1,2,3,4]);
let d = new Set ([5,6,7,8]);
console.log(c.isDisjointFrom(d));
let C = new Set ([1,2,3,4,5]);
let D = new Set ([1,6,7,8]);
console.log(C.isDisjointFrom(D));
//Returns true if the two Sets have no common values; otherwise, returns false.

//isSubsetOf()
let E = new Set ([1,2,3]);
let F = new Set ([1,2,3,4,5]);
console.log(E.isSubsetOf(F));
let e = new Set ([1,2,3,4,5,6]);
let f = new Set ([4,5,6,])
console.log(f.isSubsetOf(e))
//Returns true if every value in the first Set is also present in the second Set.

//symmetricsDifference()
let g = new Set ([1,2,3,4,5,8]);
let h = new Set ([3,4,5,2,6,7])
console.log(g.symmetricDifference(h))
console.log(h.symmetricDifference(g))
