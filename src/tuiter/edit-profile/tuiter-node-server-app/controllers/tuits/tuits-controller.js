import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.liked = false;
    tuits.push(newTuit);
    res.json(newTuit);
  }
  
  const findTuits = (req, res) => {
    const type = req.query.type
    if(type) {
      console.log('[1]')
      const tuitsOfType = tuits
        .filter(tuit => tuit.type === type)
      res.json(tuitsOfType)
      return
    }
    console.log('[2]')
    res.json(tuits)
  }
  const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
      (t) => t._id === tuitdIdToUpdate)
    tuits[tuitIndex] = 
      {...tuits[tuitIndex], ...updates};
      console.log(tuits)
//      console.log(tuits)
    res.send(tuits[tuitIndex]);
  }
  
  
   

   const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter((t) =>
      t._id !== tuitdIdToDelete);
    res.sendStatus(200);
  }
  

export default (app) => {
 app.post('/tuits', createTuit);
 app.get('/tuits', findTuits);
 app.put('/tuits/:tid', updateTuit);
 app.delete('/tuits/:tid', deleteTuit);
}
