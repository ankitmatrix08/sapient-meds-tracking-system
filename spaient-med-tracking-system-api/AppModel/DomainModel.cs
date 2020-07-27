using MedApi.Domain.Module;
using System.Diagnostics.CodeAnalysis;

namespace spaient_med_tracking_system_api.AppModel
{
    [ExcludeFromCodeCoverage]
    public class DomainModel
    {
        public IMedsDomain MedsDomain { get; set; }
    }
}