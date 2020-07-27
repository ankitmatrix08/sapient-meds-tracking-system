using MedsApi.Model.Entity;
using Microsoft.AspNetCore.Mvc;
using spaient_med_tracking_system_api.AppModel;

namespace spaient_med_tracking_system_api.Controllers
{
    public abstract class BaseApiController : ControllerBase
    {
        public DomainModel _domain { get; set; } = new DomainModel();
        public DatabaseContext _databaseContext { get; set; }
    }
}
