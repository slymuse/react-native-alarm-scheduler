import { NativeModule } from "expo";
import type { AlarmPermissionResponse, AlarmAction, AlarmContext, AlarmScheduleInput, ExpoAlarmModuleEvents, NativeAlarmBackupResult, NativeAlarmDebugState, ScheduledAlarm } from "./ExpoAlarm.types";
declare class ExpoAlarmModule extends NativeModule<ExpoAlarmModuleEvents> {
    getPermissionsAsync(): Promise<AlarmPermissionResponse>;
    requestPermissionsAsync(): Promise<AlarmPermissionResponse>;
    openAlarmSettingsAsync(): Promise<boolean>;
    scheduleAlarmAsync(alarm: AlarmScheduleInput): Promise<ScheduledAlarm>;
    cancelAlarmAsync(id: string): Promise<boolean>;
    getScheduledAlarmsAsync(): Promise<ScheduledAlarm[]>;
    getCurrentAlarmContextAsync(): Promise<AlarmContext | null>;
    getPendingAlarmActionsAsync(): Promise<AlarmAction[]>;
    clearPendingAlarmActionsAsync(ids?: string[]): Promise<void>;
    getPendingNativeAlarmHandoffAsync(): Promise<AlarmAction | null>;
    clearPendingNativeAlarmHandoffAsync(): Promise<void>;
    completeNativeAlarmAsync(alarmId: string): Promise<void>;
    scheduleNativeAlarmBackupAsync(alarmId: string, delaySeconds?: number): Promise<NativeAlarmBackupResult>;
    cancelNativeAlarmBackupAsync(alarmId: string): Promise<boolean>;
    clearBypassAsync(alarmId: string): Promise<void>;
    resetNativeAlarmCompletionAsync(alarmId: string): Promise<void>;
    getNativeAlarmDebugStateAsync(alarmId: string): Promise<NativeAlarmDebugState>;
    setSystemAlarmAsync(alarm: AlarmScheduleInput): Promise<boolean>;
    openSystemAlarmAppAsync(): Promise<boolean>;
}
declare const _default: ExpoAlarmModule;
export default _default;
//# sourceMappingURL=ExpoAlarmModule.d.ts.map