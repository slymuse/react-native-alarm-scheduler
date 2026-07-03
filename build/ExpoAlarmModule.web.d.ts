import { NativeModule } from "expo";
import type { AlarmPermissionResponse, AlarmAction, AlarmContext, AlarmScheduleInput, ExpoAlarmModuleEvents, NativeAlarmBackupResult, NativeAlarmDebugState, ScheduledAlarm } from "./ExpoAlarm.types";
declare class ExpoAlarmModule extends NativeModule<ExpoAlarmModuleEvents> {
    getPermissionsAsync(): Promise<AlarmPermissionResponse>;
    requestPermissionsAsync(): Promise<AlarmPermissionResponse>;
    openAlarmSettingsAsync(): Promise<boolean>;
    scheduleAlarmAsync(_alarm: AlarmScheduleInput): Promise<ScheduledAlarm>;
    cancelAlarmAsync(_id: string): Promise<boolean>;
    getScheduledAlarmsAsync(): Promise<ScheduledAlarm[]>;
    getCurrentAlarmContextAsync(): Promise<AlarmContext | null>;
    getPendingAlarmActionsAsync(): Promise<AlarmAction[]>;
    clearPendingAlarmActionsAsync(_ids?: string[]): Promise<void>;
    getPendingNativeAlarmHandoffAsync(): Promise<AlarmAction | null>;
    clearPendingNativeAlarmHandoffAsync(): Promise<void>;
    completeNativeAlarmAsync(_alarmId: string): Promise<void>;
    scheduleNativeAlarmBackupAsync(alarmId: string, delaySeconds?: number): Promise<NativeAlarmBackupResult>;
    cancelNativeAlarmBackupAsync(_alarmId: string): Promise<boolean>;
    clearBypassAsync(_alarmId: string): Promise<void>;
    resetNativeAlarmCompletionAsync(_alarmId: string): Promise<void>;
    getNativeAlarmDebugStateAsync(alarmId: string): Promise<NativeAlarmDebugState>;
    setSystemAlarmAsync(_alarm: AlarmScheduleInput): Promise<boolean>;
    openSystemAlarmAppAsync(): Promise<boolean>;
    private unavailablePermission;
}
declare const _default: typeof ExpoAlarmModule;
export default _default;
//# sourceMappingURL=ExpoAlarmModule.web.d.ts.map