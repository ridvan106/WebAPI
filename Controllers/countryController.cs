using datab.DB;
using Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace repsitoryPattetn.Controllers
{
    public class countryController : ApiController
    {       
        [Route("api/countries/{id}")]
        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
              using (implemetService conn = new implemetService())
             {
                 conn.delete(conn.GetId(id));
             }
            return Ok();
        }
        [Route("api/countries/")]
        [HttpGet]
        public IEnumerable<country> Get()
        {
            using (implemetService conn = new implemetService())
            {
                return conn.GetAll();
            }
        }
        [Route("api/countries/")]
        [HttpPost]
        public IHttpActionResult insert(country Obj)
        {
            using (implemetService conn = new implemetService())
            {
                conn.insert(Obj);
            };
            return Ok(200);


        }

        [Route("API/countries/{id}")]
        [HttpPut]
        public void update(int id,country Obj)
        {
            using (implemetService conn = new implemetService())
            {
                conn.update(Obj);
            }
        }
        [Route("api/countries/{id}")]
        [HttpGet]
        public country Get(int id)
        {
            using (implemetService conn = new implemetService())
            {

                return conn.GetId(id);

            }

        }

    }

}

