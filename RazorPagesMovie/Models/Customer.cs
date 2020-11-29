using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
namespace RazorPagesMovie.Models
{
    public enum Membership
    {
        PAY_AS_YOU_GO, MONTHLY, QUARTERLY, YEARLY
    }
    public class Customer
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [DataType(DataType.Date)]
        public DateTime Birthdate { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
        public Membership? Membership { get; set; }
        public virtual ICollection<Rental> Rentals { get; set; }
        
    }
}
