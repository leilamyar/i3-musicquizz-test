// To run this code (node.js must be installed):
// open terminal and type:     node server.js
// Check terminal console for results.

// Principle explained here: https://www.tutorialspoint.com/levenshtein-distance-in-javascript

// source : https://gist.githubusercontent.com/andrei-m/982927/raw/9e30f7222f3488e72bc764c4ed5897c48d4fd3d0/levenshtein.js


// =============== FUNCTION =========================
function getLevenshteinDistance (a, b){
  if(a.length == 0) return b.length; 
  if(b.length == 0) return a.length; 
  
  var matrix = [];
  
  // increment along the first column of each row
  var i;
  for(i = 0; i <= b.length; i++){
    matrix[i] = [i];
  }
  
  // increment each column in the first row
  var j;
  for(j = 0; j <= a.length; j++){
    matrix[0][j] = j;
  }
  
  // Fill in the rest of the matrix
  for(i = 1; i <= b.length; i++){
    for(j = 1; j <= a.length; j++){
      if(b.charAt(i-1) == a.charAt(j-1)){
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
          Math.min(matrix[i][j-1] + 1, // insertion
            matrix[i-1][j] + 1)); // deletion
          }
        }
      }
      
      return matrix[b.length][a.length];
    };
    


// =============== TESTS =========================
console.log('Leila / lilas : ', getLevenshteinDistance('leila', 'lilas')); 
// output: 2

console.log('mr brightside / mr bride sight : ', getLevenshteinDistance('mr brightside', 'mr bride sight'));
// output: 6

console.log('my heart will go on /my hart wil goon : ', getLevenshteinDistance('my heart will go on', 'my hart wil goon'));
// output: 3
