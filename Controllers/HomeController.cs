using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using datab;
using datab.DB;
using Service;

namespace repsitoryPattetn.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {


            using (implemetService conn = new implemetService())
            {
                return View(conn.GetAll());
            }               
                  
            
        }
       
        public ActionResult sil(int Id)
        {

            using (implemetService conn = new implemetService())
            {
                country temp = new country() { id = Id };
                conn.delete(temp);
                return RedirectToAction("Index", "Home");

            }
               
        }

        [Route("insert/{Name}/{populations}")]
        public ActionResult insert(string Name,int populations)
        { 
            

                country temp = new country() {
                    id=2,
                    name = Name,
                    population = populations,
                    info = "information",
                    flag = "https://www.countryflags.io/TR/flat/64.png"
                };

            using (implemetService conn = new implemetService())
            {
                conn.insert(temp);
                return RedirectToAction("Index", "Home");
            }
                
            }

        [Route("detail/{Id}")]
        public ActionResult Details(int Id)
        {

            using (implemetService conn = new implemetService())
            {
                return View(conn.GetId(Id));
            }
                
           


        }
        [Route("update/{Id}")]
        public ActionResult Update(int Id)
        {

            using (implemetService conn = new implemetService())
            {
                return View(conn.GetId(Id));
            }
                
        }
        [Route("edit/{Id}/{Name}/{number}/{Info}")]
        public ActionResult edit(int Id,string Name,int number,string Info)
        {
            
            
            country temp = new country()
            {
                id = Id,
                name = Name,
                info = Info,
                population = number

            };

            using (implemetService conn = new implemetService())
            {
                 conn.update(temp);

            return RedirectToAction("Index", "Home");
            }
               
        }
        [Route("insert")]
        public ActionResult insert(string Name,string population)
        {


            country temp = new country()
            {
                id = 2,
                name =Name,
                population =  Int32.Parse(population),
                info = "information",
                flag = "https://www.countryflags.io/TR/flat/64.png"
            };

            using (implemetService conn = new implemetService())
            {
                conn.insert(temp);
                return RedirectToAction("Index", "Home");
            }
        }
    }

}