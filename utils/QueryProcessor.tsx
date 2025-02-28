
//chatgpt wrote this
function isPrime(num : number) {
  if (num <= 1) {
    return false;
  }

  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
          return false;
      }
  }

  return true;
}

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  else if (query.toLowerCase().includes("name")) {
    return (
      "Taylor"
    );
  }
  else if (query.toLowerCase().includes("largest")) {
    let nums = query.slice(query.indexOf(":") + 1, query.indexOf("?"));
    let nums1 = nums.split(", ");
    let nums2 = nums1.map(item => parseInt(item.trim()));
    console.log(nums);
    console.log(nums1);
    console.log(nums2);
    return (
      Math.max(...nums2).toString()
    );
  }
  else if (query.toLowerCase().includes("plus")) {
    let nums = query.slice(query.indexOf("is") + 2, query.indexOf("?"));
    let nums1 = nums.split(" plus ");
    let nums2 = nums1.map(item => parseInt(item.trim()));
    console.log(nums);
    console.log(nums1);
    console.log(nums2);
    return (
      (nums2.reduce((acc, curr) => acc + curr, 0)).toString()
    );
  }
  else if (query.toLowerCase().includes("times")) {
    let nums = query.slice(query.indexOf("is") + 2, query.indexOf("?"));
    let nums1 = nums.split(" times ");
    let nums2 = nums1.map(item => parseInt(item.trim()));
    console.log(nums);
    console.log(nums1);
    console.log(nums2);
    return (
      (nums2[0] * nums2[1]).toString()
    );
  }
  else if (query.toLowerCase().includes("minus")) {
    let nums = query.slice(query.indexOf("is") + 2, query.indexOf("?"));
    let nums1 = nums.split(" minus ");
    let nums2 = nums1.map(item => parseInt(item.trim()));
    console.log(nums);
    console.log(nums1);
    console.log(nums2);
    return (
      (nums2[0] - nums2[1]).toString()
    );
  }
  else if (query.toLowerCase().includes("square and a cube")) {
    let nums = query.slice(query.indexOf(":") + 1, query.indexOf("?"));
    let nums1 = nums.split(", ");
    let nums2 = nums1.map(item => parseInt(item.trim()));
    let nums3 = nums2.filter(num => (Math.sqrt(num) % 1 === 0) && (Math.cbrt(num) % 1 === 0))
    console.log(nums);
    console.log(nums1);
    console.log(nums2);
    console.log(nums3);
    if (nums3.length > 0) {
      return (
        (nums3[0]).toString()
      );
    }
  }
  else if (query.toLowerCase().includes("prime")) {

    let nums = query.slice(query.indexOf(":") + 1, query.indexOf("?"));
    let nums1 = nums.split(", ");
    let nums2 = nums1.map(item => parseInt(item.trim()));
    let nums3 = nums2.filter(num => (isPrime(num)))
    console.log(nums);
    console.log(nums1);
    console.log(nums2);
    console.log(nums3);
    if (nums3.length > 0) {
      return (
        (nums3[0]).toString()
      );
    }
  }
  else if (query.toLowerCase().includes("to the power of")) {
    let nums = query.slice(query.indexOf("is") + 2, query.indexOf("?"));
    let nums1 = nums.split(" to the power of ");
    let nums2 = nums1.map(item => parseInt(item.trim()));
    console.log(nums);
    console.log(nums1);
    console.log(nums2);
    return (
      (Math.pow(nums2[0],nums2[1])).toString()
    );
  }


    return "";
  }
