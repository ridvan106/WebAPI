using datab.DB;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace datab
{
    public  class connect : DbContext
    {
        public connect() : base("ConString")
        {

            this.Configuration.LazyLoadingEnabled = false;
        }
        public DbSet<country> country { get; set; }
    }
}
