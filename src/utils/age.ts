function e(input) {
  return btoa(input); 
}

function d(input) {
  return atob(input); // 
}

export default function age() {
  const ed = 'Smw3Z2FhNi0yMjBi'; 
  const de = d(ed);
  const age = Math.floor((new Date().getTime() - new Date(de).getTime()) / (1000 * 60 * 60 * 24 * 365.25));
  return age;
}
