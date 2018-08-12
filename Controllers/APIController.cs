using datab.DB;
using Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
namespace repsitoryPattetn.Controllers
{
    public class APIController : Controller
    {
        // GET: API
        [Route("API")]
        public ActionResult Index()
        {
            using (implemetService conn = new implemetService())
            {
                
                return Json(conn.GetAll(),JsonRequestBehavior.AllowGet);

            }
            
        }
        
        [Route("API/delete")]              
        public void delete(int val)
        {
            
            using (implemetService conn = new implemetService())
            {

                
                 conn.delete(conn.GetId(val));
             

            }

        }
        [Route("API/insert")]
        public void insert(country Obj)
        {
            using (implemetService conn = new implemetService())
            {
                conn.insert(Obj);
            };
            
        }
        
        [Route("API/update")]
        public void update(country Obj)
        {
            using(implemetService conn = new implemetService())
            {
                conn.update(Obj);
            }
        }
    }
}