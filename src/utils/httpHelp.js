const API = "https://api.themoviedb.org/3"

export function get(path){

   return fetch(API + path ,{
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTFkZDM3ZjYwODdmYjhjMGZhNTdkOWQ5ZmY2NDZjYyIsInN1YiI6IjYxYjE4ZTQ1MTY4NGY3MDAxY2M3ZWE0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4F5qtgT8MXZ4zsgnbuiPCY2e5_P5hjPop3LFjp9BhYk",
        "Content-type": "application/json;charset=utf-8",
      },
    })
      .then((res) => res.json())
}