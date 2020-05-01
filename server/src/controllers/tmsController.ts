import {Request,Response} from 'express';
import pool from '../database';

class TmsController{


   // Table - Users

   public async usersList(req:Request,res:Response){

    const users = await (await pool).query('SELECT * FROM users');
    res.json(users);
 
   }

   public async getOneUser(req:Request,res:Response):Promise<void>{
      const {id} = req.params;
      const user = await (await pool).query('SELECT * FROM users WHERE user_id = ?',[id]);
      console.log(user);
      res.json(user);
   }

   public async createUser(req:Request,res:Response):Promise<void>{
      (await pool).query('INSERT INTO users set ?',[req.body])
      res.json({message:'User Saved....!!!!'});
   }

   public async deleteUser(req:Request,res:Response){
         const {id} = req.params;
         await (await pool).query('DELETE FROM users WHERE user_id = ?',[id]);
         res.json({message:'deleting a user'});
   }

   public updateUser(req:Request,res:Response){
      res.json({text:'Updating a users'+req.params.id});
   }

   //Table - Training

    public async coursesList(req:Request,res:Response){

      const courses = await (await pool).query('SELECT * FROM training');
      res.json(courses);
   

     }

     public async coursesUPList(req:Request,res:Response){

      const courses = await (await pool).query('SELECT * FROM training WHERE start_date >= CURDATE()');
      res.json(courses);
   
     }

     public async coursesDWList(req:Request,res:Response){

      const courses = await (await pool).query('SELECT * FROM training WHERE start_date < CURDATE()');
      res.json(courses);
   
     }
  
     public async getOneCourse(req:Request,res:Response):Promise<void>{
        const {id} = req.params;
        const user = await (await pool).query('SELECT * FROM training WHERE course_id = ?',[id]);
        console.log(user);
        res.json(user);
     }
  
     public async createCourse(req:Request,res:Response):Promise<void>{
        (await pool).query('INSERT INTO training set ?',[req.body])
        console.log([req.body])
        res.json({message:'Course Saved....!!!!'});
     }
  
     public async deleteCourse(req:Request,res:Response){
           const {name} = req.params;
           await (await pool).query('DELETE FROM training WHERE name = ?',[name]);
           res.json({message:'deleting a Course'});
     }

     public async updateCourses(req:Request,res:Response):Promise<void>{

       const {id} = req.params;
       console.log([req.body.name,req.body.start_date]);
      
      await (await pool).query('UPDATE training set name = ?, start_date = ? WHERE course_id = ?',[req.body.name,req.body.start_date,id]);
      res.json({text:'Course Updated.....!!!!'});
      
}

        public updCourse(req:Request,res:Response){
       res.json({text:'Updating a course'+req.params.id});
     }
      

     //Table - User_Training

   public async addCourseForUser(req:Request,res:Response):Promise<void>{
      console.log([req.body]);
      (await pool).query('INSERT INTO user_training values (?,?)',[req.body[0],req.body[1]])
      res.json({message:'Course Saved....!!!!'});
   }

   public async getCourseListForUser(req:Request,res:Response):Promise<void>{
      const {id} = req.params;
      const user = await (await pool).query('SELECT course_id FROM user_training WHERE user_id = ?',[id]);
      console.log(user);
      res.json(user);
   }

   public async getUserListForCourse(req:Request,res:Response):Promise<void>{
      const {id} = req.params;
      const user = await (await pool).query('SELECT user_id FROM user_training WHERE course_id = ?',[id]);
      console.log(user);
      res.json(user);
   }

}

export const tmsController = new TmsController();
export default tmsController;