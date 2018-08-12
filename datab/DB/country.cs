using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace datab.DB
{
    [Table("country")]
    public class country
    {
        public int id { get; set; }
        public string name { get; set; }
        public int population { get; set; }
        public string flag{ get; set; }
        public string info { get; set; }
      
    }
}
