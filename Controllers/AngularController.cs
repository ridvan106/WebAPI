using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace repsitoryPattetn.Controllers
{
    public class AngularController : Controller
    {
        // GET: Angular
        [Route("countries")]
        public ActionResult Index()
        {
            return View();
        }
        [Route("edit")]
        public ActionResult Edit()
        {
            return View();
        }
        [Route("list")]
        public ActionResult list()
        {
            return View();
        }
        [Route("add")]
        public ActionResult add()
        {
            return View();
        }

    }
}