using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace RazorPagesMovie.Models
{
    public class Rental
    {
        public int ID { get; set; }
        public int CustomerID { get; set; }
        public int MovieID { get; set; }
        [DataType(DataType.Date)]
        public DateTime RentDate { get; set; }

        public virtual Movie Movie { get; set; }
        public virtual Customer Customer { get; set; }
    }
}
 