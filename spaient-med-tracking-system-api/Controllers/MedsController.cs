using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using MedApi.Domain.Module;
using MedsApi.Model.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace spaient_med_tracking_system_api.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class MedsController : BaseApiController
    {
        public MedsController(IMedsDomain medsDomain)
        {
            _domain.MedsDomain = medsDomain;
        }

        [HttpGet]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(IEnumerable<MedsDetailModel>))]
        [ProducesResponseType((int)HttpStatusCode.BadRequest, Type = typeof(RequestResponseModel))]
        public IActionResult GetAllMeds()
        {
            try
            {
                var response = _domain.MedsDomain.GetAllMedsInfo();
                if (response != null)
                    return Ok(response);
                else
                    return BadRequest(MedApi.Domain.Common.Helper.Helper.Response("Server Error", null, false));

            }
            catch (Exception ex)
            {
                return BadRequest(MedApi.Domain.Common.Helper.Helper.Response("Server Error", null, false));
            }
        }

        [HttpPost]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(RequestResponseModel))]
        [ProducesResponseType((int)HttpStatusCode.BadRequest, Type = typeof(RequestResponseModel))]
        public async Task<IActionResult> AddMed([FromBody] MedsDetailModel model)
        {
            try
            {
                var response = await _domain.MedsDomain.AddNewMed(model);
                if (response != null && response.IsSuccessful)
                    return Ok(response);
                else
                    return BadRequest(MedApi.Domain.Common.Helper.Helper.Response("Server Error", null, false));

            }
            catch (Exception ex)
            {
                return BadRequest(MedApi.Domain.Common.Helper.Helper.Response("Server Error", null, false));
            }
        }

        [HttpPut]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(RequestResponseModel))]
        [ProducesResponseType((int)HttpStatusCode.BadRequest, Type = typeof(RequestResponseModel))]
        public async Task<IActionResult> UpdateMed([FromBody] MedsDetailModel model)
        {
            try
            {
                var response = await _domain.MedsDomain.UpdateMed(model);
                if (response != null && response.IsSuccessful)
                    return Ok(response);
                else
                    return BadRequest(MedApi.Domain.Common.Helper.Helper.Response("Server Error", null, false));

            }
            catch (Exception ex)
            {
                return BadRequest(MedApi.Domain.Common.Helper.Helper.Response("Server Error", null, false));
            }
        }

        [HttpGet("search")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(IEnumerable<MedsDetailModel>))]
        [ProducesResponseType((int)HttpStatusCode.BadRequest, Type = typeof(RequestResponseModel))]
        public IActionResult SearchMed([FromQuery] string identifier)
        {
            try
            {
                var response = _domain.MedsDomain.SearchMedsByAnyProp(identifier);
                if (response != null)
                    return Ok(response);
                else
                    return BadRequest(MedApi.Domain.Common.Helper.Helper.Response("Server Error", null, false));

            }
            catch (Exception ex)
            {
                return BadRequest(MedApi.Domain.Common.Helper.Helper.Response("Server Error", null, false));
            }
        }
    }
}
