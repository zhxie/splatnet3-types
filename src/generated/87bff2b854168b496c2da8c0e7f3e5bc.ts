import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Replay, ReserveReplayDownloadPayload, UserError } from '../types.js';

/**
 * 87bff2b854168b496c2da8c0e7f3e5bc ReplayModalReserveReplayDownloadMutation
 *
 * mutation ReplayModalReserveReplayDownloadMutation
 *
 * Generated 25/01/2023 from SplatNet 3 2.0.0-7070f95e.
 */
interface ReplayModalReserveReplayDownloadMutation_87bff2b {
    reserveReplayDownload: /** ReserveReplayDownloadPayload */ OperationFieldType<'ReplayModalReserveReplayDownloadMutation', 'reserveReplayDownload', {
        replay: /** Replay */ LinkedFieldType<ReserveReplayDownloadPayload, 'replay', {
            id: Replay['id'];
        }, false>;
        userErrors: /** UserError */ LinkedFieldType<ReserveReplayDownloadPayload, 'userErrors', {
            code: UserError['code'];
        }, true>;
    }>;
}

export default ReplayModalReserveReplayDownloadMutation_87bff2b;
export { ReplayModalReserveReplayDownloadMutation_87bff2b };
